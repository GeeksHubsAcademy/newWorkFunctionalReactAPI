
import React, { useState, useEffect } from 'react';

import './Home.css';

import loader from '../../img/load.gif';

import { bringCharacters } from '../../Services/apicalls';
import Characterdetail from '../../Components/Characterdetail/Characterdetail';

const Home = () => {

    //I will create a hook on which I will deposit the characters once they arrive to us...

    const [characters, setCharacters] = useState([]);
    const [choosen, setChoosen] = useState("");

    useEffect(() => {
        //This function is triggered when the component is mounted for the first time.

        if (characters.length === 0) {
            // bringCharacters();

            setTimeout(() => {
                //Adding a 2 seconds delay on purpose...

                bringCharacters().then(
                    (res) => setCharacters(res.data.results)
                );

            }, 2000);

        };


    }, [characters]);


    const selectCharacter = (person) => {
        
        //I set the Hook with the choosen character....

        setChoosen(person);
    }


    if (characters.length > 0) {
        //This means that we HAVE characters inside our hook

        return (
            <div className="charactersShowcase">
                {/* Here I proceed to MAP the hook which contains all the characters */}

                <div className="leftSide">
                    {

                        characters.map(person => {
                            return <div className="personDesign" key={person.id}>
                                <div>{person.name}</div>
                                <div onClick={() => selectCharacter(person)}><img className="personPic" src={person.image} alt={person.name} /></div>
                            </div>
                        })
                    }

                </div>

                <div className="rightSide">

                        {/* Conditional rendering.....  */}

                        {
                            choosen?.id !== undefined &&

                            //I am summoning the characterdetail component, passing the whole selected character to it using props
                            <Characterdetail choosen={choosen}/>
                        }

                </div>



            </div>
        )
    } else {
        //This return will take care of the loading screen...
        return (
            <div className='homeLoadingDesign'>
                <img className='spinner' src={loader} alt="loader" />
            </div>
        )

    }

};

export default Home;