import React from 'react';
import {
    Avatar,
    CancelButton,
    ChangePassword,
    Container,
    Content,
    Footer,
    Form,
    GroupButton,
    Input,
    Label,
    RedButton,
    SaveButton,
    Title
} from './styles';

const ProfileContent: React.FC = () => {
    return (
        <Container>
            <Title>My Profile</Title>

            <Content>
                <Avatar />
                <Form>
                    <Label className="mt-0">Name</Label>
                    <Input name="name" placeholder="Name" />

                    <Label>Email</Label>
                    <Input name="email" placeholder="E-mail" />
                    <Label>Current Password</Label>
                    <Input
                        name="currentPassowrd"
                        placeholder="Current Password"
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
                    <SaveButton>Save</SaveButton>
                </GroupButton>
            </Footer>
        </Container>
    );
};

export default ProfileContent;
