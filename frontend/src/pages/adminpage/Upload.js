import React from 'react'
import Sidebar from './Sidebar'
const Upload = () => {
  return (
    <>
        <section className='dashContainer'>
        <Sidebar/>
        <main className='uploadContainer'>
             <h2>Upload all your question from here</h2>
             <section>
                <div className='chooseUpload'>
                    <h2>Choose Categories for upload</h2>
                    <select name="" id="">
                    <option value="">Choose</option>
                    <option value="">Aptitude</option>
                    <option value="">Reasoning</option>
                    <option value="">verbal</option>
                    </select>
                </div>
                <form action="">
                <div className='addUpload'>
                    <label htmlFor="">Your question</label>
                    <input id='quesInput' placeholder="type your question..." type="text" /> <br />
                    <br />
                    <div>
                        <label htmlFor="">Option A)</label>
                        <input  placeholder='type option' type="text" />
                        <label htmlFor="">Option B)</label>
                        <input placeholder='type option' type="text" /><br />
                    </div>
                    <div>
                        <label htmlFor="">Option C)</label>
                        <input placeholder='type option' type="text" />
                        <label htmlFor="">Option D)</label>
                        <input placeholder='type option' type="text" />
                    </div>

                    <button className='uploadBtn'>Upload</button>
                    
                </div>
                </form>

             </section>
        </main>
        </section>
    </>
  )
}

export default Upload