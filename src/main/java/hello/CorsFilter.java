package hello;

import java.io.IOException;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Iterator;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter extends  OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
        response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, X-XSRF-TOKEN, JSESSIONID, jessionId,Set-Cookie, Cookie, cookie");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        //response.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Expose-Headers", "Set-Cookie, Cookie, cookie");
        //Access-Control-Allow-Credentials
        
        if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) request).getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
         filterChain.doFilter(request, response);
        }
        
        Collection<String> headerNames = response.getHeaderNames();
		for (Iterator iterator = headerNames.iterator(); iterator.hasNext();) {
			String string = (String) iterator.next();
			System.out.println("response headers"+" "+string +"=" +response.getHeader(string));
			
		}
        }
    

    @Override
    public void destroy() {
    }

  
	
}