import React, { useState } from "react"
import Modal from 'react-modal'
import styles from "../../styles/Home.module.css"

const Cards = ({ data, loading }) => {

  const [modalOpened, setModalOpened] = useState(false)
  const [modalData, setModalData] = useState([])

  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-25%',
      width: '850px',
      transform: 'translate(-50%, -40%)',
      color: 'black',
    },
  }
  return (
    <>
      {loading ? (
          <p className={styles.loading}>LOADING...</p>
        ) : (
          <>
            {data && data.map((item, index) => 
              <div key={index} className={styles.card}>
                <img src={item.image_url} alt={item.image_url} className={styles.cardImg} onClick={()=> {
                  setModalData(data[index])
                  setModalOpened(true)
                }}/>
                <div className={styles.cardDescription}>
                  <p className={styles.desctiptionData}><b>Token address: </b>{item.token_address}</p>
                  <p className={styles.desctiptionData}><b>Token ID: </b>{item.token_id}</p>
                  <p className={styles.desctiptionData}><b>User: </b>{item.user}</p>
                  <p className={styles.desctiptionData}><b>Status: </b>{item.status}</p>
                  <p className={styles.desctiptionData}><b>Name: </b>{item.name}</p>
                  <p className={styles.desctiptionData}><b>Created at: </b>{item.created_at}</p>
                  <p className={styles.desctiptionData}><b>Updated at: </b>{item.updated_at}</p>
                </div>
              </div>
            )}
          </>
        )}
        <Modal isOpen={modalOpened} onRequestClose={() => setModalOpened(false)} style={customStyles}>
          <div className={styles.modalWrapper}>
            <img src={modalData?.metadata?.image} alt={modalData?.metadata?.image} className={styles.modalImg} />
            <div className={styles.modalDescription}>
              <h1>{modalData?.metadata?.name}</h1>  
              <div style={{fontSize: '1.25rem', fontWeight: 'bold'}}>{modalData?.metadata?.effect}</div>
              <div className={styles.modalStats}>
                <p className={styles.marginRight} style={{color: '#a07500'}}><b>Attack: </b>{modalData?.metadata?.attack}</p> 
                <p className={styles.marginRight} style={{color: '#045D08'}}><b>Health: </b>{modalData?.metadata?.health}</p>
                <p className={styles.marginRight} style={{color: '#141A93'}}><b>Mana: </b>{modalData?.metadata?.mana}</p>       
              </div>
              <div className={styles.modalStats}>
                <span className={styles.marginRight}><b>Quality: </b>{modalData?.metadata?.quality}</span> 
                <span className={styles.marginRight}><b>Rarity: </b>{modalData?.metadata?.rarity}</span>
                <span className={styles.marginRight}><b>Set: </b>{modalData?.metadata?.set}</span>  
                <span className={styles.marginRight}><b>Type: </b>{modalData?.metadata?.type}</span>     
              </div>
              <div className={styles.modalInfo}>
                <div className={styles.modalInfoColumn}>
                  <p><b>God: </b>{modalData?.metadata?.god}</p>  
                  <div><b>Proto: </b>{modalData?.metadata?.proto}</div>  
                </div>
                <div className={styles.modalInfoColumn}>
                  <p><b>Tribe: </b>{modalData?.metadata?.tribe}</p>
                  <div><b>Status: </b>{modalData?.metadata?.status}</div>
                </div>
              </div>
              <div className={styles.modalCollection}>
                <img className={styles.modalCollectionIco} src={modalData?.collection?.icon_url} />
                <p className={styles.modalCollectionName}><b>{modalData?.collection?.name}</b></p>  
              </div>
            </div>
            <button className={styles.modalBtn} onClick={() => setModalOpened(false)}>x</button> 
          </div>
        </Modal>
    </>
  );
};

export default Cards;
