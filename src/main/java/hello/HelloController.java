package hello;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

@RestController
public class HelloController {

	@GetMapping("/hello")
    public ResponseEntity<Greeting> index() {
        return new ResponseEntity<Greeting>(new Greeting(1, "yoohoo"), HttpStatus.OK);
    }
	
	
	@GetMapping("/loginRet")
    public ResponseEntity<?> loginRet(HttpServletRequest request) {
	
		Enumeration<String> headerNames = request.getHeaderNames();
		while(headerNames.hasMoreElements())
		{
			String nextElement = headerNames.nextElement();
			System.out.println("hdr:"+nextElement+"="+request.getHeader(nextElement));
		}
		LoginRet loginRet=null;
		HttpSession session = request.getSession(false);
		if(session!=null)
		{
			loginRet=(LoginRet) session.getAttribute("loginRet");
		}
		if(loginRet!=null)
		{
			return new ResponseEntity<LoginRet>(loginRet, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>(" no user associated", HttpStatus.FORBIDDEN);
		}
		
        
    }
	
	@PostMapping("/abc")
	public ResponseEntity<Greeting> post(@RequestParam("def") String def) {
        return new ResponseEntity<Greeting>(new Greeting(1, def), HttpStatus.OK);
    }
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestParam("userName") String userName, 
			@RequestParam("password")String password, HttpServletRequest request)
	{
		request.getSession().invalidate();
		HttpSession session = request.getSession(true);
		if(password.equals("p"))
		{
			LoginRet loginRet = null;
			if(userName.toLowerCase().startsWith("user"))
			{
				loginRet = new LoginRet(session.getId(), userName, "ROLE_USER");
			}
			else if(userName.toLowerCase().startsWith("admin"))
			{
				loginRet = new LoginRet(session.getId(), userName, "ROLE_ADMIN");
			}
			else
			{
				loginRet = new LoginRet(session.getId(), userName, "ROLE_USER", "ROLE_ADMIN");
			}
			session.setAttribute("loginRet", loginRet);
			System.out.println("sessionId="+session.getId());
			
			return new ResponseEntity<LoginRet>(loginRet, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>(userName +" does not have access", HttpStatus.FORBIDDEN);
		}
		
	}
	
	@GetMapping("/getUserName")
    public ResponseEntity<String> getUserName(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		LoginRet loginRet=null;
		if(session!=null)
		{
			loginRet = (LoginRet) session.getAttribute("loginRet");
		}
		if(loginRet!=null)
		{
			return new ResponseEntity<String>(loginRet.getUserName()+" LastName", HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Restricted", HttpStatus.FORBIDDEN);
		}
        
    }

}