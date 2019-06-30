using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebApi.Dtos;
using WebApi.Helpers;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("users")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public AccountController(IUserService userService, IMapper mapper, AppSettings appSettings)
        {
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings;
        }
        
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate([FromBody] UserDto userDto)
        {
            var user = _userService.Authenticate(userDto.Username, userDto.Password);

            if (user == null)
                return BadRequest("Username or password is incorrect");

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] 
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new {
                user.Id,
                user.Username,
                user.FirstName,
                Token = tokenString
            });
        }
        
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] UserDto userDto)
        {
            try 
            {
                // save 
                _userService.Create(userDto);
                return Ok();
            } 
            catch(AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        public IActionResult GetAll()
        {
            var users =  _userService.GetAll();
            var userDtos = _mapper.Map<IList<UserDto>>(users);
            return Ok(userDtos);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user =  _userService.GetById(id);
            var userDto = _mapper.Map<UserDto>(user);
            return Ok(userDto);
        }

//        [HttpPut("{id}")]
//        public IActionResult Update(int id, [FromBody]UserDto userDto)
//        {
//            // map dto to entity and set id
//            var user = _mapper.Map<User>(userDto);
//            user.Id = id;
//
//            try 
//            {
//                // save 
//                _userService.Update(user, userDto.Password);
//                return Ok();
//            } 
//            catch(AppException ex)
//            {
//                // return error message if there was an exception
//                return BadRequest(ex.Message);
//            }
//        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}
