using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using WebApi.Dtos;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public interface IUserService
    {
        UserDto Authenticate(string username, string password);
        IEnumerable<UserDto> GetAll();
        UserDto GetById(int id);
        UserDto Create(UserDto user);
        // void Update(UserDto user, string password = null);
        void Delete(int id);
    }

    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public UserDto Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(x => x.UserName == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (password != user.PasswordHash)
                return null;

            // authentication successful
            return _mapper.Map<UserDto>(user);
        }

        public IEnumerable<UserDto> GetAll()
        {
            var users = _context.Users;
            return _mapper.Map<IEnumerable<UserDto>>(users);
        }

        public UserDto GetById(int id)
        {
            var user = _context.Users.Find(id);
            return _mapper.Map<UserDto>(user);
        }

        public UserDto Create(UserDto user)
        {
            // validation
            if (string.IsNullOrWhiteSpace(user.Password))
                throw new AppException("Password is required");

            if (_context.Users.Any(x => x.UserName == user.Username))
                throw new AppException("Username '" + user.Username + "' is already taken");

            // todo : hash password
            var applicationUser = new ApplicationUser
            {
                UserName = user.Username,
                PasswordHash = user.Password
            };

            _context.Users.Add(applicationUser);
            _context.SaveChanges();

            return user;
        }

//        public void Update(UserDto userParam, string password = null)
//        {
//            var user = _context.Users.Find(userParam.Id);
//
//            if (user == null)
//                throw new AppException("User not found");
//
//            if (userParam.Username != user.Email)
//            {
//                // username has changed so check if the new username is already taken
//                if (_context.Users.Any(x => x.Email == userParam.Username))
//                    throw new AppException("Username " + userParam.Username + " is already taken");
//            }
//
//            // update user properties
//            user.FirstName = userParam.FirstName;
//            user.LastName = userParam.LastName;
//            user.Username = userParam.Username;
//
//            // update password if it was entered
//            if (!string.IsNullOrWhiteSpace(password))
//            {
//                byte[] passwordHash, passwordSalt;
//                CreatePasswordHash(password, out passwordHash, out passwordSalt);
//
//                user.PasswordHash = passwordHash;
//                user.PasswordSalt = passwordSalt;
//            }
//
//            _context.Users.Update(user);
//            _context.SaveChanges();
//        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }
    }
}
