import mod from './Dialogss.module.css'
import {NavLink} from 'react-router-dom'



const DialogItem = (props) => {
   return  <div className={mod.dialogItem}>
                <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
                
}

const Message = (props) => {
    return  <div className={mod.message}>{props.message}</div>

}

const Dialogss = () => {
    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogItems}>
                
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Shamil" id="4" />
                <DialogItem name="Ruslan" id="5" />
                <DialogItem name="Ramazan" id="6" />

            </div>
            <div className={mod.messages}>
                <Message message='Hi, how are you?'/>
                <Message message='Not bad, and you?'/>
                <Message message='me to'/>
                <Message message='This good' />

            </div>
        </div>
    )
}

export default Dialogss;