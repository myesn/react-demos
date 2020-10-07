using System.Text;
using System.Security.Claims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Bogus;
using System.Threading;
using Microsoft.AspNetCore.Authorization;
using IdentityModel;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace asp_net_core_webapi.Controllers
{
  [ApiController]
  [Route("API/[controller]/[action]")]
  [Authorize]
  public class UserController : ControllerBase
  {
    private static List<User> _users = new List<User>();
    private readonly Faker _faker = new Faker();

    private readonly TokenManagement _tokenManagement;
    private readonly ILogger<UserController> _logger;

    public UserController(TokenManagement tokenManagement, ILogger<UserController> logger)
    {
      // _users = _faker.Make(_faker.Random.Number(1, 5), () => new User
      // {
      //   UserName = _faker.Finance.AccountName(),
      //   Password = _faker.Random.Word()
      // }).ToList();

      _tokenManagement = tokenManagement;
      _logger = logger;
    }

    [HttpGet]
    public string Ping()
    {
      return "pong";
    }

    [HttpGet]
    public IEnumerable<UserListItem> List()
    {
      Thread.Sleep(1000);

      return _users.Select(x => new UserListItem
      {
        UserName = x.UserName
      });
    }

    [HttpGet]
    [AllowAnonymous]
    public ActionResult Any(string userName)
    {
      Thread.Sleep(1000);
      try
      {
        if (string.IsNullOrWhiteSpace(userName))
          throw new ValidationException("用户名不能为空");

        if (_users.Any(x => x.UserName == userName))
          throw new ValidationException("用户名已存在");

        return Ok();
      }
      catch (ValidationException ex)
      {
        return BadRequest(new
        {
          error = ex.Message
        });
      }
    }

    [HttpPost]
    [AllowAnonymous]
    public ActionResult SignUp(UserCreateBody body)
    {
      Thread.Sleep(1000);
      try
      {
        if (string.IsNullOrWhiteSpace(body.UserName))
          throw new ValidationException("用户名不能为空");

        if (string.IsNullOrWhiteSpace(body.Password))
          throw new ValidationException("密码不能为空");

        if (string.IsNullOrWhiteSpace(body.PasswordConfirm))
          throw new ValidationException("确认密码不能为空");

        if (body.PasswordConfirm != body.Password)
          throw new ValidationException("两次密码输入不一致");

        if (_users.Any(x => x.UserName == body.UserName))
          throw new ValidationException("用户名已存在");

        _users.Add(body);

        return Ok();
      }
      catch (ValidationException ex)
      {
        return BadRequest(new
        {
          error = ex.Message
        });
      }
    }

    [HttpPost]
    [AllowAnonymous]
    public ActionResult SignIn(UserLoginBody body)
    {
      Thread.Sleep(1000);
      try
      {
        if (string.IsNullOrWhiteSpace(body.UserName))
          throw new ValidationException("用户名不能为空");

        if (string.IsNullOrWhiteSpace(body.Password))
          throw new ValidationException("密码不能为空");

        var user = _users.FirstOrDefault(x => x.UserName == body.UserName);
        if (user == null)
          throw new ValidationException("用户名不存在");

        if (user.Password != body.Password)
          throw new ValidationException("密码错误");

        return Ok(new
        {
          token = GenerateJwtToken(user.UserName)
        });
      }
      catch (ValidationException ex)
      {
        return BadRequest(new
        {
          error = ex.Message
        });
      }
    }


    private string GenerateJwtToken(string userName)
    {
      var claims = new[]
      {
        new Claim(JwtClaimTypes.PreferredUserName,userName)
      };
      var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_tokenManagement.Secret));
      var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
      //SecurityTokenDescriptor
      //https://jasonwatmore.com/post/2019/10/11/aspnet-core-3-jwt-authentication-tutorial-with-example-api#jwt-middleware-cs
      var jwtToken = new JwtSecurityToken(
        issuer: _tokenManagement.Issuer,
        audience: _tokenManagement.Audience,
        claims: claims,
        expires: DateTime.Now.AddMinutes(_tokenManagement.AccessExpiration),
        signingCredentials: credentials
      );
      var token = new JwtSecurityTokenHandler().WriteToken(jwtToken);

      return token;
    }
  }

  public class User
  {
    public string UserName { get; set; }
    public string Password { get; set; }
  }

  public class UserCreateBody : User
  {
    public string PasswordConfirm { get; set; }
  }

  public class UserLoginBody : User
  {

  }

  public class UserListResult
  {
    public IEnumerable<UserListItem> Items = new List<UserListItem>();
  }

  public class UserListItem
  {
    public string UserName { get; set; }
  }
}
