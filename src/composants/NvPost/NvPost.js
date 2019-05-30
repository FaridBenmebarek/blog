import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


import './NvPost.css'

class NvPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Administrateur'
    }

    postArticle = () => {
      const nvPost = {
        title: this.state.title,
        content: this.state.content,
        auteur: this.state.author
      }
      axios.post('https://jsonplaceholder.typicode.com/posts', nvPost)
        .then(res => {
          toast.info(`Article "${res.data.title}" ajouté par "${res.data.auteur}"`)
        })

    }

    render () {
        return (
            <div className="NvPost form-group">
                <h1>Ajouter un Article</h1>
                <label>Titre</label>
                <input className="form-control" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Contenu</label>
                <textarea className="form-control" rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Auteur</label>
                <select className="form-control" value= {this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="administrateur">Administrateur</option>
                    <option value="redacteur">Rédacteur</option>
                    <option value="anonyme">Anonyme</option>
                </select>
                <button className="btn btn-primary my-3" onClick={this.postArticle}>Ajouter un Article</button>
            </div>
        );
    }
}

export default NvPost;