---
sidebar_position: 2
description: Backend class descriptions.
---

Backend Class Documentation
=============================

### BluetoothLocator
* Class Purpose: Connect the user to a BLE beacon.
* Datafields:
  * signalStrength
    * Type: integer 
    * Purpose: Report the connectivity and strenght of connection to beacon
* Methods:
  * contactBeacon():
    * Purpose: connect to the BLE beacon later gain location information.
    * Pre-condition: the user is not already connected to device
    * Post-condtion: user is now connected to the beacon for later usage

### LocationComparison
* Class Purpose: Gather the location information of the user and possible nearby users.
* Datafeilds:
  * nearbyUsers
    * Type: array of UserProfile type
* Methods:
  * getUserLocation()
    * Purpose: Get the location information of the user from the BLE beacon.
    * Pre-condition: User must be connected to a beacon.
    * Post-Condition: Location information is returned. 
    * Return Values: set of integers of location information.
  * putUserLocation()
    * Purpose: Put the location data into a common variable for user deviced to acces
    * Pre-condition: User must have gotten location information previously.
    * Post-Condition: Location information is available for other devices to acces.
    * Return Values: Boolean value for a successful or unsucessful operation.
  * getOtherLocations()
    * Purpose: access the location of other devices for comparison.
    * Pre-Condition: must have ran putUserLocation()
    * Post-Condition: has location data of other users to utilize and compare for distances.
    * Return Values: list of location data.
  * compareLocations():
    * Purpose: Compare location of user to others to access if other user are nearby.
    * Pre-Condidtion: must have other users location data through the getOtherLocations() function.
    * Post-Condidtion: device becomes aware of nearby users for recommdations.
    * Return Values: List of UserProfile type that are nearby location wise.
	
### WordRecommendor
  * Class Purpose: Recommend Interest of other uses to the 
  * Datafields:
    * userFavWords
      * Type: Array of Strings
      * Purpose: have easy access to the users favorite words for others and own device to use
    * otherFavWords
      * Type: Array of strings
      * Purpose: easy accessibility for recommdations to the user.
  * Methods:
    * getFavWords(UserProfile)
      * Purpuse: Gather the favorite words of the input UserProfile for recommdations.
      * Pre-Condition: Must have an array of users who are within a distance. Can be done with LocationComparison class.
      * Post-Condition: Gains access to the favorite words/activitites of other users.
      * Parameter:
        * UserProfile
          * Purpose: nearby user that an interest can be recommened to device user.   
      * Return Values: array of strings.
    * getNearbyUsers()
      * Purpose: find users that are close to the current user for word recommdation.
      * Pre-Condition: must have gotten other user locations using the getOtherLocations().
      * Return Value: array of type UserProfile.
    * chooseWords(userFavWords, otherFavWords):
      * Purpuse: access favorite activities/words of current user and nearby users to see if any common interest.
      * Pre-Condition: must have an array of favorite words from other users using the getFavWords method
      * Post-Condidion: words/interests is recommended to the the front end
      * Parameters:
        * userFavWords
          * Purpose: words of the device user that are paticularily interesting to the user
        * otherFavWords
          * Purpose: favorite words/interest of nearby users to be recommended to the current user
      * Return Value: array of strings that will be recommended to user.  

### UserProfile
* Class Purpose: Keep information of users.
* Datafields:
  * favWords
    * Type: array of strings
    * Purpose: store the favorite interests/words of the user
  * Email
    * Type: String
    * Purpose: Email of user for contacting and notifications
  * Passowrd
    * Type: Sting
    * Purpuse: creates security for the user and login system.
* Methods:
  * getUserProfile()
    * Purpose: get information on the user
    * Pre-Condition: user profile must be created
    * Post-Condition: information about the user's profile can now be accessed
    * Return Value: instance of UserProfile
  * addUser()
    * Purpose: register a user to the app
    * Pre-Condition: User profile must not already have been created
    * Post-Condition: user is now registered in database
    * Return Value: Boolean value for successful operation or unsuccessful operation
  * changePassword()
    * Purpose: Present the the user with the option to change there password.
    * Pre-Condition: User profile must already be made
    * Post-Condition: User has new password
    * Return Value: Boolean Value for a successful or unsuccessful operatoin.  
