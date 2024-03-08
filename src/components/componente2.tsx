export function Lista() {
    return (
      <>
          <form>
              <div>
                  <label htmlFor='tarefa'><h2>Adicione um novo estudo</h2></label>
                  <input
                  type="text"
                  name="tarefa"
                  id="tarefa"
                  placeholder='o que gostaria de estudar?'
                  required/>
              </div>
  
              <div>
                  <label htmlFor='tempo'><h3> tempo </h3></label>
                  <input
                  type="time"
                  name="tempo"
                  step="1"
                  id="tempo"
                  min='00:00:00'
                  max='01:30:00'
                  required/>
              </div>
              <br></br>
              <button>Confirmar</button>
          </form>  
      </>
    )
  }
  
  export default Lista