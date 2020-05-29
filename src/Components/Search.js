import React, {useState, useRef, useEffect} from 'react'

function Search({countries, regions}) {

    const [toggleOptions, setToggleOption] = useState(false)
    const inputRef = useRef(null)
    const selectOptionRef = useRef(null)
    const selectedRef = useRef(null)

    const openCloseOptions = () =>{
        setToggleOption(!toggleOptions)
    }

    // Input Search
    useEffect(() =>{
        inputRef.current.addEventListener('keyup', () =>{
                const inputValue = inputRef.current.value.trim().toLowerCase()
                countries(inputValue)
        })
    }, [countries])

    // Filtered based on Region
    useEffect(()=>{
        let options = document.querySelectorAll('.option')

        Array.from(options)
        .forEach(el =>{
            el.addEventListener('click', ()=>{
                selectedRef.current.innerHTML = el.innerHTML
                selectOptionRef.current.classList.remove('active')
                selectOptionRef.current.classList.add('options-container')

                const selected = selectedRef.current.innerHTML
                regions(selected)
                
            })
        })
        
    }, [regions])

  return (
    <div>
      <div className="search">
            <div>
                <input ref={inputRef} type="text" placeholder= "Search for a country..."/>
            </div>
            <div className="select-box">

                    <div ref={selectOptionRef} className={toggleOptions ? "active" : "options-container"}>

                        <div className="option">Africa</div>  
                        <div  className="option">America</div>
                        <div  className="option">Asia</div>
                        <div className="option">Europe</div>
                        <div className="option">Oceania</div>
                    
                    </div>  

                <div ref={selectedRef} onClick={openCloseOptions} className="selected">Filter by Region</div>  
            </div>
          </div>
    </div>
  )
}

export default Search

