# README

Here\'s my entry for In The Memory\'s tech challenge, coded with Ruby on Rails and React.js.
You\'ll find a few useful informations in this readme.


* **Versions**
The project runs with Ruby 2.7.3, Rails 6.1.4 and React 17.0.2 .

* **Gems & packages**
The project uses [activerecord-import](https://github.com/zdennis/activerecord-import), [Axios](https://github.com/axios/axios) and [Styled Components](https://styled-components.com/).

## Installation

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.7.3`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.7.3
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler) and [Yarn](https://github.com/yarnpkg/yarn):

```shell
bundle && yarn
```

### Initialize the database

```shell
rails db:create db:migrate db:seed
```
(this will take a while)

### Fire up the server
First run:

```shell
rails db:create db:migrate db:seed
```
Then go to your favorite browser and type localhost:3000 in your search bar.

##### Hope you appreciate it!