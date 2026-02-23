---
sidebar_position: 3
description: Frontend class descriptions.
---

Frontend Class Documentation
=============================

### HomePage
* Class Purpose: This component serves as the landing page for the application, responsible for managing navigation state and establishing bluetooth connection.
* Datafields:
  * navigationContainer
    * Type: Navigator object 
    * Purpose: Manages the navigation state of the application and handles transtions between ProfilePage, BoardPage, and Login.
* Methods:
  * requestBluetooth():
    * Purpose: Prompts service to scan for and connect to BLE beacon to later gain location information.
    * Pre-condition: The user is not already connected to a beacon, and has granted bluetooth permissions.
    * Post-condtion: Connection is established to the beacon for location data usage.
    * Return Value: None

### ProfilePage
* Class Purpose: This component manages and the storgae and modification of user data and account settings.
* Datafields:
  * name
    * Type: String
    * Purpose: The user's registered name.
  * users
    * Type: List
    * Purpose: Collection of user profiles.
  * userWordPrefs
    * Type: List
    * Purpose: Collection of user's preferred words for the AAC Board.
  * email
    * Type: String 
    * Purpose: The user's registered email.
  * password
    * Type: String 
    * Purpose: The user's password for secure login.
* Methods:
  * getUserData():
    * Purpose: Get information on the user.
    * Pre-condition: The user must have created a profile.
    * Post-condtion: The user's profile information can now be accessed.
    * Return Value: Instance of UserData.
  * changeUserData():    
    * Purpose: Allows user to change their profile information and password.
    * Pre-condition: The user must have created a profile.
    * Post-condtion: The user has updated their profile data in the database.
    * Return Value: Boolean value for successful operation or unsuccessful operation.
  * selectUser():
    * Purpose: Select or register a specific user.
    * Pre-condition: The user is not already registered or currently selected.
    * Post-condtion: The user is now registered as the current user in the interface.
    * Return Value: Boolean value for successful operation or unsuccessful operation.

### Login
* Class Purpose: This component manages user authentication and allows access to profile information.
* Datafields:
  * email
    * Type: String 
    * Purpose: Stores the user's registered email.
  * password
    * Type: String 
    * Purpose: Stores the user's password for secure login.
* Methods:
  * login():
    * Purpose: Authenticate the user's login credentials against the database.
    * Pre-condition: The email and password fields must not be empty.
    * Post-condtion: The user will be given access to the application HomePage.
    * Return Value: Boolean value for successful operation or unsuccessful authentication.
  * selectUser():
    * Purpose: Allows user to select an exsisting profile from a list of saved profiles.
    * Pre-condition: The user must already have an exsisting profile on the database.
    * Post-condtion: The selected user's email and password credentials are filled in for the login attempt.
    * Return Value: Boolean value for successful operation or unsuccessful selection.

### BoardPage
* Class Purpose: This component serves as the communication interface where users interact with grid icons to form sentences.
* Datafields:
  * sentence
    * Type: List
    * Purpose: Stores the sequence of selected words to form a sentence.
  * words
    * Type: AACWord[]
    * Purpose: All available words on the AAC board grid display.
  * recWords
    * Type: AACWord[]
    * Purpose: All recommended words provided by the system.
* Methods:
  * playSentence():
    * Purpose: Convert list of selcted words into audible speech.
    * Pre-condition: The user must have selected at least one word.
    * Post-condtion: Audio of the constructed sentence will be played aloud.
    * Return Value: None.
  * clickWord():    
    * Purpose: User clicks a word on the board to add it to the sentence list.
    * Pre-condition: The user must select a word from the AAC board.
    * Post-condtion: The selected word will be added to the sentence list.
    * Return Value: None.
  * getRecommendedWords():
    * Purpose: Give a list of recommended words based on interests or set goals.
    * Pre-condition: The user's device must be connected to the BLE beacon.
    * Post-condtion: The recWords field will be filled with the appropriate recommended words.
    * Return Value: List of AACWord objects.

### AACWord
* Class Purpose: Data object representing a single vocabulary word within the AAC system.
* Datafields:
  * AudioRef
    * Type: Sound
    * Purpose: Reference to the audio used for the text-to-speech output.
  * ImageRef
    * Type: Icon
    * Purpose: Reference to the image displayed on the board.
* Methods:
  * playAudio():
    * Purpose: Play the sound associated with the word.
    * Pre-condition: The audiRef must point to a vaild audio file.
    * Post-condtion: The word's audio will be played aloud.
    * Return Value: None.

