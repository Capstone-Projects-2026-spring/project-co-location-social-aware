---
sidebar_position: 4
---

# Features and Requirements


## Functional Requirements
* Guardians of users must make an admin profile to use the Co-Location Socially Aware application.
  * Admin profile will verify the user creating the admin profile is an adult.
  * A verification email will be sent when an admin registers for the first time.
* Users must make a student profile to use the Co-Location Socially Aware application
  * Users must select their guardian to connect the accounts.
  * A verification email will be sent to the guardian to verify and confirm the student profile.
* Admin and student users will be authenticated when logging into the system.
* Users can select and manage their interests on their student profile.
  * "Managing" includes the users ability to choose their likes and dislikes which will be saved to their profile, and can be changed at any time.
* Users can connect and interact with other users in their area using BLE beacons. 
  * Users can use their AAC device to interact with other users using sentence suggestions based on the saved interests on the other users profile.
  * Users can use their AAC device to interact with other users with shared interests as their profile will mark the shared interest.
  * Users can use their AAC device to interact with groups using sentence suggestions for a group setting.
* Admin users can set goals for child selected on their profile.
  * Student users' AAC device will give suggections based on their goal given by the admin.
  * Student user's activity will be marked if it contributes to the completion of the given goal. 

## Nonfunctional Requirements
* The application will prioritize accessibility and ease of use for AAC users with wide-ranging motor and cognitive abilities.
* The AAC keyboard interface will be simple, visually clear, and designed specifically for touch-based interaction.
* The system will securely handle user account data using industry-standard practices.
    * The application will authenticate users using established authentication mechanisms.
    * The application will protect data in transit using secure communication protocols.
    * Location data will be used only as necessary to support proximity-based interactions.
* The system will support multiple users simultaneously within the same beacon-defined area in addition to supporting at least ten concurrent users total.
    * The use of a cloud service provider will allow the application to scale on demand.
* The application will be accessible on tablets and mobile devices commonly used as AAC devices.
* The application will promote social connection without pressuring users to participate.
