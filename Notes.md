Do we want to keep individual records for each update? Yes.

Form
How many reps?

## Primary Screen

The user should be able to see their status and the status of their peers.
The user should be able to add reps.

## CosmosDB

### Access Patterns

[C1] Create/edit a user
[Q1] Retrieve a user
[C2] Create/edit a post (rep entry; +10 reps of $exercise @ $time)
[Q2] Retrieve a post
[Q3] List a user's posts in short form

create/edit a team
retreive a team

[C3] Create a comment
[Q4] List a post's comments
[C4] Like a post
[Q5] List a post's likes
[Q6] List the x most recent posts created in short form (feed)

### Posts

### Teams

```json
{
  "id": "<team-id>",
  "type": "team",
  "createdBy": "<user-id>",
  "teamId": "<team-id>",
  "teamName": "",
  "teamAvatar": "",
  "exercise":"",
  "targetReps": "",
  "totalReps": "",
  "leader":"",
  "creationDate": "<post-creation-date>"
  // "last24hr": "", // needs further thought
},
{
  "id": "<member-id>",
  "type": "member",
  "teamId": "<team-id>",
  "userId": "<user-id>",
  "userName": "",
  "userAvatar": "",
  "exercise": "",
  "role": "",
  "totalReps": "",
  "postCount": ""
},
```
