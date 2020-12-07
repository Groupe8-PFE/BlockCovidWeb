import React, { useState, useEffect } from "react"
import {
    useHistory
} from "react-router-dom"

import webService from '../services/webServices'

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [medecins, setMedecins] = useState([])
    const [nouveauNom, setNouveauNom] = useState('')
    const [nouveauPrenom, setNouveauPrenom] = useState('')
    const [nouveauInami, setNouveauInami] = useState('')
    const [nouveauTelephone, setNouveauTelephone] = useState('')
    const [nouveauEmail, setNouveauEmail] = useState('')
    const [nouveauMotDePasse, setNouveauMotDePasse] = useState('')
    const [nouveauRue, setNouveauRue] = useState('')
    const [nouveauVille, setNouveauVille] = useState('')
    const [nouveauCodePostal, setNouveauCodePostal] = useState('')
    const history = useHistory()



    const ajouterMedecin = (event) => {
        event.preventDefault()
        const medecinObjet = {
            nom: nouveauNom,
            prenom: nouveauPrenom,
            inami: nouveauInami,
            telephone: nouveauTelephone,
            email: nouveauEmail,
            motDePasse: nouveauMotDePasse,
            rue: nouveauRue,
            ville: nouveauVille,
            codePostal: nouveauCodePostal
        }

        console.log(medecinObjet)
        webService
            .creeMedecin(medecinObjet)
            .then(medecinRenvoye => {
                setMedecins(medecins.concat(medecinRenvoye))
                setNouveauNom('')
                setNouveauPrenom('')
                setNouveauInami('')
                setNouveauTelephone('')
                setNouveauEmail('')
                setNouveauMotDePasse('')
                setNouveauRue('')
                setNouveauVille('')
                setNouveauCodePostal('')
                history.push('/')
            })
            .catch(error => {
                console.warn(error)
            })
    }

    const seConnecter = (event) => {
        event.preventDefault()
        const connexionObjet = {
            email: nouveauEmail,
            motDePasse: nouveauMotDePasse,
        }

        console.log(connexionObjet)
        webService
            .seConnecter(connexionObjet)
            .then(
                setNouveauEmail(''),
                setNouveauMotDePasse(''),
                history.push('/accueil/medecin')
            )
            .catch(error => {
                console.warn(error)
            })
    }

    const sInscrire = (event) => {
        event.preventDefault()
        history.push('/inscription')
    }

    const changementNom = (e) => {
        console.log(e.target.value)
        setNouveauNom(e.target.value)
    }

    const changementPrenom = (e) => {
        console.log(e.target.value)
        setNouveauPrenom(e.target.value)
    }

    const changementInami = (e) => {
        console.log(e.target.value)
        setNouveauInami(e.target.value)
    }

    const changementTelephone = (e) => {
        console.log(e.target.value)
        setNouveauTelephone(e.target.value)
    }

    const changementEmail = (e) => {
        console.log(e.target.value)
        setNouveauEmail(e.target.value)
    }

    const changementMotDePasse = (e) => {
        console.log(e.target.value)
        setNouveauMotDePasse(e.target.value)
    }

    const changementRue = (e) => {
        console.log(e.target.value)
        setNouveauRue(e.target.value)
    }

    const changementVille = (e) => {
        console.log(e.target.value)
        setNouveauVille(e.target.value)
    }

    const changementCodePostal = (e) => {
        console.log(e.target.value)
        setNouveauCodePostal(e.target.value)
    }

    useEffect(() => {
        console.log('effect')
        webService
            .tousMedecins()
            .then(initialiserMedecins => {
                console.log('promesse remplie')
                setMedecins(initialiserMedecins)
            })
    }, [])

    console.log('rendues ', medecins.length, ' medecins')

    const exposedValue = {
        medecins,
        nouveauNom,
        nouveauPrenom,
        nouveauInami,
        nouveauTelephone,
        nouveauEmail,
        nouveauMotDePasse,
        nouveauRue,
        nouveauVille,
        nouveauCodePostal,
        ajouterMedecin,
        seConnecter,
        sInscrire,
        changementNom,
        changementPrenom,
        changementInami,
        changementTelephone,
        changementEmail,
        changementMotDePasse,
        changementRue,
        changementVille,
        changementCodePostal
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}

export default Context;