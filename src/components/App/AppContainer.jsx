import React, { useState, useEffect } from 'react'
import App from './App'
import webService from '../../services/webServices'

const AppContainer = () => {

  const [ medecins, setMedecins] = useState([]) 
  const [ nouveauNom, setNouveauNom ] = useState('')
  const [ nouveauPrenom, setNouveauPrenom ] = useState('')
  const [ nouveauInami, setNouveauInami ] = useState('')
  const [ nouveauTelephone, setNouveauTelephone ] = useState('')
  const [ nouveauMail, setNouveauMail ] = useState('')
  const [nouveauRue, setNouveauRue] = useState('')
  const [ nouveauVille, setNouveauVille ] = useState('')
  const [ nouveauCodePostal, setNouveauCodePostal ] = useState('')


  const ajouterMedecin = (event) => {
      event.preventDefault()
      const medecinObjet = {
        nom: nouveauNom,
        prenom: nouveauPrenom,
        inami: nouveauInami,
        telephone: nouveauTelephone,
        mail: nouveauMail,
        rue: nouveauRue,
        ville: nouveauVille,
        codePostal: nouveauCodePostal
    }

    webService
    .creeMedecin(medecinObjet)
    .then(medecinRenvoye => {
        setMedecins(medecins.concat(medecinRenvoye))
        setNouveauNom('')
        setNouveauPrenom('')
        setNouveauInami('')
        setNouveauTelephone('')
        setNouveauMail('')
        setNouveauRue('')
        setNouveauVille('')
        setNouveauCodePostal('')
    }) 
      .catch(error => {
        console.warn(error)
    })
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
  
  const changementMail = (e) => {
      console.log(e.target.value)
      setNouveauMail(e.target.value)
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

  return(
      <div>
          <App medecins={medecins} ajouterMedecin={ajouterMedecin}
              nouveauNom={nouveauNom} nouveauPrenom={nouveauPrenom}
              nouveauInami={nouveauInami} nouveauTelephone={nouveauTelephone}
              nouveauMail={nouveauMail} nouveauRue={nouveauRue} nouveauVille={nouveauVille}
              nouveauCodePostal={nouveauCodePostal} changementNom={changementNom}
              changementPrenom={changementPrenom} changementInami={changementInami}
              changementTelephone={changementTelephone} changementMail={changementMail}
              changementRue={changementRue} changementVille={changementVille} changementCodePostal={changementCodePostal}
            />
      </div>
  )
}

export default AppContainer