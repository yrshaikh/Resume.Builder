using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebApi.Helpers;
using WebApi.Services;

namespace WebApi.Controllers
{
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

        public IActionResult Authenticate()
        {
            return Ok("auth");
//            var user = _userService.Authenticate(userDto.Username, userDto.Password);
//
//            if (user == null)
//                return BadRequest("Username or password is incorrect");
//
//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new Claim[] 
//                {
//                    new Claim(ClaimTypes.Name, user.Id.ToString())
//                }),
//                Expires = DateTime.UtcNow.AddDays(7),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//            };
//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            var tokenString = tokenHandler.WriteToken(token);
//
//            // return basic user info (without password) and token to store client side
//            return Ok(new {
//                Id = user.Id,
//                Username = user.Username,
//                FirstName = user.FirstName,
//                LastName = user.LastName,
//                Token = tokenString
//            });
        }
    }
}
