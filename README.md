# Week3: Authentication porject

## bookzie

this page allows users to create an account, save books and recommend books which then are shown on the home page. You can find our page hosted on heroku 

Writing thorough documentation, because the UX Lead asked for it.
![](https://gifimage.net/wp-content/uploads/2017/10/cat-typing-gif-7.gif)

## Database

our database uses three tables following this schema: 

<details>
<summary><code>users</code></summary>

| column      | type    | constraints               |
| ----------- | ------- | ------------------------- |
| id          | integer | primary key autoincrement |
| email       | text    | unique                    |
| hash        | text    |                           |
| created_at  | datetime| current timestamp         |

</details>

<details>
<summary><code>books</code></summary>

| column      | type    | constraints                      |
| ----------- | ------- | -------------------------        |
| id          | integer | primary key autoincrement        |
| user_id     | text    | references users(id)             |
| name        | text    | not null                         |
| author      | text    | not null                         |
| rating      | integer | not null                         |
| sharing     | integer | default 0 check(sharing in 0, 1) |

</details>

<details>
<summary><code>sessions</code></summary>

| column      | type    | constraints                   |
| ----------- | ------- | -------------------------     |
| id          | text    | primary key                   |
| user_id     | text    | references users(id)          |
| expires_at  | datetime| not null                      |
| created_at  | datetime| default current timestamp     |


</details>


![](https://user-images.githubusercontent.com/88027905/194065884-29723bb1-b5be-4ad5-8254-3f407d440d53.png)
