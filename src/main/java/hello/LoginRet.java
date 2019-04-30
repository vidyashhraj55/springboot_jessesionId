package hello;

public class LoginRet {

	private String[] roles;
	private String userName;
	private String jsessionId;
	public String getJsessionId() {
		return jsessionId;
	}
	public void setJsessionId(String jsessionId) {
		this.jsessionId = jsessionId;
	}
	public LoginRet(String jsessionId, String userName, String... roles) {
		super();
		this.jsessionId=jsessionId;
		this.userName = userName;
		this.roles = roles;
	}
	public String[] getRoles() {
		return roles;
	}
	public void setRoles(String[] roles) {
		this.roles = roles;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public LoginRet() {
		super();
		
	}
}
