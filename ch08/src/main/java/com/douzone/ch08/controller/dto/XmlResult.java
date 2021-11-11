package com.douzone.ch08.controller.dto;

import javax.xml.bind.annotation.XmlRootElement;

// JAXB를 사용하기 위해서 @XmlRootElement
// JAXB : xml 바인딩을 위한 자바 아키텍처
@XmlRootElement(name = "response")
public class XmlResult {
	private String result; /* "success" or "fail" */
	private GuestbookVo data; /* if success, set */
	private String message; /* if fail, set */

	public String getResult() {
		return result;
	}

	public GuestbookVo getData() {
		return data;
	}

	public String getMessage() {
		return message;
	}

	private XmlResult() {
	}

	private XmlResult(GuestbookVo data) {
		this.result = "success";
		this.data = data;
	}

	// Fail
	private XmlResult(String message) {
		this.result = "success";
		this.message = message;
	}

	public static XmlResult success(GuestbookVo data) {
		return new XmlResult(data);
	}

	// Fail
	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}

	@XmlRootElement(name = "date")
	public static class GuestbookVo {
		private Long no;
		private String name;
		private String password;
		private String regDate;
		private String message;

		public Long getNo() {
			return no;
		}

		public void setNo(Long no) {
			this.no = no;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getRegDate() {
			return regDate;
		}

		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

	}
}
