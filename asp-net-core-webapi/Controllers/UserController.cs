using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Bogus;
using System.Threading;

namespace asp_net_core_webapi.Controllers
{
  [ApiController]
  [Route("API/[controller]/[action]")]
  public class UserController : ControllerBase
  {
    private static List<User> _users = new List<User>();
    private readonly Faker _faker = new Faker();
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
      // _users = _faker.Make(_faker.Random.Number(1, 5), () => new User
      // {
      //   UserName = _faker.Finance.AccountName(),
      //   Password = _faker.Random.Word()
      // }).ToList();

      _logger = logger;
    }

    [HttpGet]
    public IEnumerable<User> List()
    {
      Thread.Sleep(1000);
      return _users;
    }

    [HttpGet]
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
    public ActionResult Create(UserCreateBody body)
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
}
