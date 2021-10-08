//config
const Repos = require('./model/repos')
const btoa = require('btoa');
const fetch = require('cross-fetch');

exports.viewProfile = async  (req, res) => {
    res.sendFile(__dirname + '/profile.html')
}

exports.getProfile = async  (req, res) => {

  const usernme = ""
  const password = ""

  const heders = {
    "Authorization" : `Basic ${btoa(`${usernme}:${password}`)}`
  }

  // const url = "https://api.github.com/search/issues?q=repo:freecodecamp/freecodecamp type:iddue"

  const url = "https://api.github.com/users/AXhyra95"

  // const res1 = await fetch(url);

  // console.log(res1);
  const response = await fetch(url, {
    "method": "GET",
    "headers": heders
  })

  const result = await response.json()
  res.send(result)

}

exports.viewPepositories = async  (req, res) => {
  res.sendFile(__dirname + '/repositories.html')
}


exports.getRepositories = async  (req, res) => {

  const usernme = ""
  const password = ""

  const heders = {
    "Authorization" : `Basic ${btoa(`${usernme}:${password}`)}`
  }

  const url = "https://api.github.com/users/AXhyra95/repos"

  const response = await fetch(url, {
    "method": "GET",
    "headers": heders
  })

  const result = await response.json()
  res.send(result)

  await Repos.find().then( async repos => {

    let object_repos = [];
    result.forEach(repo => {
      let x = true
      repos.forEach(repos_model => {
        
        if (repo.id == repos_model.id_repo) {
          x = false
        }

      });
      
      if (x) {

        object_repos.push({
          id_repo:repo.id,
          name:repo.name,
          visibility:repo.visibility,
          description:repo.description,
          stargazers_count:repo.stargazers_count
        })

      }

    });

    await Repos.insertMany(object_repos).then(() => {


      }).catch( err => {
        res.status(422).json({ 
            message : err 
        })
      })    

  }).catch( err => {
    res.status(422).json({ 
        message : err 
    })
  })

}