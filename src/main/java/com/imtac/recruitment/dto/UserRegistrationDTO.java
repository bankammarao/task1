package com.imtac.recruitment.dto;


import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserRegistrationDTO {
@JsonProperty("email")
private String username;
private String password;
private String mobileNumber;
private String aadharNumber;
private Date dob;
private String role;
private String candidateName;

public String getUsername() {
return username;
}

public void setUsername(String username) {
this.username = username;
}

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}

public String getMobileNumber() {
return mobileNumber;
}

public void setMobileNumber(String mobileNumber) {
this.mobileNumber = mobileNumber;
}

public String getAadharNumber() {
return aadharNumber;
}

public void setAadharNumber(String aadharNumber) {
this.aadharNumber = aadharNumber;
}

public Date getDob() {
return dob;
}

public void setDob(Date dob) {
this.dob = dob;
}

public String getRole() {
return role;
}

public void setRole(String role) {
this.role = role;
}

public String getCandidateName() {
return candidateName;
}

public void setCandidateName(String candidateName) {
this.candidateName = candidateName;
}

}
