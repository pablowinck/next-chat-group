import axios from 'axios';
import { useUserContext } from 'contexts/UserContext';
import React, { useState } from 'react';
import {
    Avatar,
    CancelButton,
    ChangePassword,
    Container,
    Content,
    Error,
    Footer,
    Form,
    GroupButton,
    Input,
    Label,
    LabelTitle,
    RedButton,
    SaveButton,
    Title
} from './styles';

const ProfileContent: React.FC = () => {
    const { user, setUser } = useUserContext();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (
        value: string,
        set: (value: string) => void,
        type: string
    ) => {
        if (!value || /^\s*$/.test(value)) {
            setErrors({
                ...errors,
                [type]: 'required field'
            });
        } else if (value.length < 4) {
            setErrors({
                ...errors,
                [type]: 'must be at least 4 characters'
            });
        } else {
            setErrors({
                ...errors,
                [type]: ''
            });
        }
        set(value);
    };

    const handleSubmit = async () => {
        if (!password) return;
        console.log(
            '[handleSubmit] post to http://localhost:3000/users/' + user.id,
            JSON.stringify({
                name: name,
                email: email,
                password: password,
                profileImage: user.profileImage
            })
        );
        await axios

            .patch(
                'http://localhost:3000/users/' + user.id,
                JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    profileImage: user.profileImage
                }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((res) => {
                setUser(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container>
            <Title>My Profile</Title>

            <Content>
                <Avatar image={user.profileImage} />

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <LabelTitle>
                        <Label className="mt-0">Name</Label>
                        {errors.name && <Error>{errors.name}</Error>}
                    </LabelTitle>
                    <Input
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) =>
                            handleChange(e.target.value, setName, 'name')
                        }
                    />

                    <LabelTitle>
                        <Label>Email</Label>
                        {errors.email && <Error>{errors.email}</Error>}
                    </LabelTitle>

                    <Input
                        name="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) =>
                            handleChange(e.target.value, setEmail, 'email')
                        }
                        type="email"
                    />
                    <LabelTitle>
                        <Label>Current Password</Label>
                        {errors.password && <Error>{errors.password}</Error>}
                    </LabelTitle>
                    <Input
                        name="password"
                        placeholder="Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />

                    <ChangePassword>Change Password?</ChangePassword>
                </Form>
            </Content>

            <Footer>
                <GroupButton>
                    <RedButton>Delete Account</RedButton>
                    <RedButton>Disable Account</RedButton>
                </GroupButton>
                <GroupButton>
                    <CancelButton>Cancel</CancelButton>
                    <SaveButton onClick={handleSubmit}>Save</SaveButton>
                </GroupButton>
            </Footer>
        </Container>
    );
};

export default ProfileContent;
