import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../components/styles";
import { useNavigate } from "react-router-dom";

function AdminLogInForm({setAdmin}) {
    const [admin_name, setAdminname] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    let navigator = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/adminin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ admin_name, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((admin) => setAdmin(admin));
          navigator("/admin")
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    console.log(admin_name);
  
    return (
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="adminname" style={{color: "whitesmoke"}}>Admin Name</Label>
          <Input
            type="text"
            id="adminname"
            autoComplete="off"
            value={admin_name}
            onChange={(e) => setAdminname(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password" style={{color: "whitesmoke"}}>Password</Label>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    );
}

export default AdminLogInForm