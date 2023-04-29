import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../../Contexts/auth"
import { API } from "../../constants"
import ProfileContentVI from "../../Components/Content/ProfileContentVI"
import ProfileContentENG from "../../Components/Content/ProfileContentENG"

function Profile() {
	const navigate = useNavigate()
	const [profileParams] = useSearchParams()
	const lang = profileParams.get("lang")
	const { user } = useAuth()

	const toggleButton = (lang) => {
		navigate(`/profile?lang=${lang}`)
	}

	return (
		<div>
			<button onClick={() => toggleButton("vi")}>VI</button>
			<button onClick={() => toggleButton("eng")}>ENG</button>
			{lang === "vi" && <ProfileContentVI userId={user?.id} />}
			{lang === "eng" && <ProfileContentENG userId={user?.id} />}
			{lang !== "vi" && lang !== "eng" && navigate("/")}
		</div>
	)
}

export default Profile
