package hello;

public class Greeting {

    private  long id;
    public Greeting(long id, String content) {
		super();
		this.id = id;
		this.content = content;
	}

	public Greeting() {
		super();
		// TODO Auto-generated constructor stub
	}

	private  String content;

    

    public void setId(long id) {
		this.id = id;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}