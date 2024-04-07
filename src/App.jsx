import { useQuery } from '@apollo/client';
import INFO_PERSON from './queries';
import { useEffect, useState } from 'react';

function App() {
  const {loading, error, data} = useQuery(INFO_PERSON)
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(loading) {
      setMessage('Loading...')
    }
  
    if(error) {
      setMessage(error)
    }

    if(data) {
      setMessage('')
    }
  }, [loading, error, data])

  return (
    <section style={{ width: '90%', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2em', rowGap:'2em', justifyContent: 'center'}}>
      {message}
      {data ? 
        data.characters.results.map((person, index) => (
          <div key={index} style={{textAlign: 'center'}}>
            <div style={{width: '300px', height:'300px', backgroundImage: `url(${person.image})`, backgroundSize: 'cover', borderWidth: '10px', borderStyle: 'solid', boxSizing: 'border-box', borderColor: person.gender === 'Male' ? 'lightblue' : 'pink', borderRadius: '50%', position: 'relative', overflow: 'hidden'}}>
              <h1 style={{position: 'absolute', bottom: '20px', textAlign: 'center', width: '100%', backgroundColor: 'rgba(0,0,0,0.6)', padding: '.3em 0', color: 'white', fontFamily: 'arial'}}>{person.name}</h1>
            </div>
            <h2>{person.species}</h2>
            <h2>{person.location.name}</h2>
          </div>
        ))
       : ''}
      
    </section>
  );
}

export default App;
