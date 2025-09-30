import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";

const SocialAuth = () => {
    return (<div className="flex flex-col justify-between md:flex-row">
        <Button type="button" label="Continue with Github" outlined icon={FaGithub} onClick={() => { }} />
        <Button type="button" label="Continue with google" outlined icon={FaGoogle} onClick={() => {}} />
    </div> );
}
 
export default SocialAuth;