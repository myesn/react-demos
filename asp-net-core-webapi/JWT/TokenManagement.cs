namespace asp_net_core_webapi
{
  public class TokenManagement
  {
    public string Secret { get; set; } = "1234567891234567"; //HS256算法的秘钥长度最新为128位，转换成字符至少16字符
    public string Issuer { get; set; } = "testapi.cn";
    public string Audience { get; set; } = "testapi";
    public int AccessExpiration { get; set; } = 30;
    public int RefreshExpiration { get; set; } = 60;
  }
}