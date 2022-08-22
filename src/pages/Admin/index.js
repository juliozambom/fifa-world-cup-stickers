import { useState, useContext } from "react";
import {
  Container,
  Title,
  BoxRow,
  TextInput,
  Button,
  LoginContainer,
  LoginForm,
} from "./styles";

import AdminContext from "../../contexts/AdminContext";
import LoadingIndicator from "../../components/LoadingIndicator";

function Admin() {
  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [stickerNumber, setStickerNumber] = useState("");
  const [playSince, setPlaySince] = useState("");
  const [workZone, setWorkZone] = useState("");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [birthDate, setBirthDate] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [adminPassword, setAdminPassword] = useState("");

  const { isAdminAuthorized, authorizeAdmin, sendedAuthorizeAdmin } =
    useContext(AdminContext);

  function handleAuthorizeAdmin() {
    authorizeAdmin(adminPassword);
  }
  if (!isAdminAuthorized) {
    return (
      <LoginContainer>
        <LoginForm>
          <Title className="login-title">Admin Login</Title>

          <TextInput
            type="password"
            placeholder="Password"
            onChange={(e) => setAdminPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAuthorizeAdmin()}
          />

          <Button
            isLoading={sendedAuthorizeAdmin}
            onClick={handleAuthorizeAdmin}
          >
            {sendedAuthorizeAdmin && <LoadingIndicator />}
            Login
          </Button>
        </LoginForm>
      </LoginContainer>
    );
  }

  return (
    <Container>
      <Title>Add new stickers</Title>
      <BoxRow>
        <TextInput
          placeholder="Player name"
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <TextInput
          className="Selector"
          placeholder="Team"
          onChange={(e) => setPlayerTeam(e.target.value)}
        />
      </BoxRow>
      <TextInput
        placeholder="Sticker number"
        onChange={(e) => setStickerNumber(e.target.value)}
      />
      <TextInput
        placeholder="Plays in the team since"
        onChange={(e) => setPlaySince(e.target.value)}
      />
      <TextInput
        placeholder="Work zone"
        onChange={(e) => setWorkZone(e.target.value)}
      />
      <TextInput
        placeholder="Weight"
        onChange={(e) => setWeight(e.target.value)}
      />
      <TextInput
        placeholder="Height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <TextInput
        placeholder="Birth date"
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <TextInput
        placeholder="Image URL"
        onChange={(e) => setImageURL(e.target.value)}
      />
      <Button>Add sticker</Button>
    </Container>
  );
}

export default Admin;
