Feature: To validate the email ids in comments


Scenario: Verify whether the email Ids in comments are valid
 Given GET user details of the user [username]
 When GET the posts by using user id
 And GET the comments using post id
 Then validate whether the email address of each comment is valid
 where:
 | username |
 | Delphine |