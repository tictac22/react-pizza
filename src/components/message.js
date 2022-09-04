import React from "react"

import { useSelector } from "react-redux"
import styles from "../styles/message.module.scss"
const Message = () => {
	const { showMessage } = useSelector((state) => state.pizza)

	if (!showMessage) {
		return null
	}
	return (
		<div className={`${styles.message} ${showMessage ? styles.message__active : ""} `}>
			Please select type and size
		</div>
	)
}
export default Message
