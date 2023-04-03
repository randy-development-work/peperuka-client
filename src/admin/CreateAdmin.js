import React, { useState } from "react";
import {
  Button,
  Error,
  Input,
  FormField,
  Label,
  Textarea,
} from "../components/styles";
import './CreateAdmin.css'

function CreateAdmin() {
  const [admin_name, setAdmin_name] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/newadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        admin_name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((admin) => console.log(admin));
        alert("Successfully Created New Admin");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  console.log(admin_name);
  console.log("pass", password);
  return (
    <div className="create-admin">
      <h2 style={{fontSize: "30px"}}>Create New Admin</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="admin_name">Admin Name</Label>
          <Input
            type="text"
            id="admin_name"
            autoComplete="off"
            value={admin_name}
            onChange={(e) => setAdmin_name(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   autoComplete="current-password"
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password Confirmation</Label>
          <Input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            //   autoComplete="current-password"
          />
        </FormField>

        <FormField>
          <Button type="submit">{isLoading ? "Loading..." : "Create Admin"}</Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </div>
  );
}

export default CreateAdmin;
