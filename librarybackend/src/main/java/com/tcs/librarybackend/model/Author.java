package model;

import org.springframework.data.annotation.Id;

public class Author {
    @Id private String id;

    private String firstName;
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void getFirstName(String lastName) {
        this.lastName = lastName;
    }
}