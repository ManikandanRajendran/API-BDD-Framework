Feature: To validate the email ids in comments

Background:
    Given set up the test environment details for execution

Scenario: Verify whether the email Ids in comments are valid
 Given GET user details of the user [username]
 When GET the posts by using user id
 Then GET the comments using post id and validate the email
 where:
 | username |
 | Delphine |