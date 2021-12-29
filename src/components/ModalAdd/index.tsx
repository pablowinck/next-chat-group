import { Channel, useChatContext } from 'contexts/ChatContext';
import { useViewContext } from 'contexts/ViewContext';
import { FC } from 'react';
import * as Yup from 'yup';
import {
    AvatarChange,
    ChannelName,
    ChannelPassword,
    ChannelTopic,
    CloseIcon,
    Container,
    Content,
    Form,
    Header,
    Input,
    IsPrivate,
    Label,
    PrivateContent,
    Submit,
    Title
} from './style';

const ModalAdd: FC = () => {
    const { channels, addChannel } = useChatContext();
    const { setIsOpenAdd } = useViewContext();

    const handleSubmit = (values, { resetForm }) => {
        const newChannel: Channel = {
            id: channels.length + 1,
            name: values.channelName,
            topic: values.channelTopic,
            image: '/images/default-avatar.png',
            members: [],
            private: {
                isPrivate: values.isPrivate,
                password: values.password
            },
            hasNotifications: false,
            isSelected: false
        };

        addChannel(newChannel);

        resetForm();
    };

    const initialValues = {
        channelName: '',
        channelTopic: '',
        isPrivate: false,
        password: ''
    };

    let validate = Yup.object().shape({
        channelName: Yup.string()
            .required('required field')
            .max(11, 'most 11 caracters'),
        channelTopic: Yup.string()
            .required('required field')
            .max(30, 'most 30 caracters'),
        password: Yup.string().min(4, 'minimum 4 caracters'),
        isPrivate: Yup.boolean()
    });

    return (
        <Container
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Header>
                <Title>New Channel</Title>
                <CloseIcon onClick={() => setIsOpenAdd(false)} />
            </Header>
            <Content
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <AvatarChange />
                        <ChannelName>
                            <Label>Name</Label>
                            <Input
                                name="channelName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.channelName}
                            />
                            {errors.channelName && touched.channelName && (
                                <Label>{errors.channelName}</Label>
                            )}
                        </ChannelName>
                        <ChannelTopic>
                            <Label>Topic</Label>
                            <Input
                                name="channelTopic"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.channelTopic}
                            />
                            {errors.channelTopic && touched.channelTopic && (
                                <Label>{errors.channelTopic}</Label>
                            )}
                        </ChannelTopic>
                        {values.isPrivate && (
                            <ChannelPassword>
                                <Label>Password</Label>
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && (
                                    <Label>{errors.password}</Label>
                                )}
                            </ChannelPassword>
                        )}

                        <PrivateContent>
                            <IsPrivate
                                type={'checkbox'}
                                name="isPrivate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.isPrivate}
                            />
                            <p>Private</p>
                        </PrivateContent>
                        <Submit
                            onClick={() => {
                                console.log(errors);
                                console.log(touched);
                            }}
                            type="submit"
                        >
                            Create
                        </Submit>
                    </Form>
                )}
            </Content>
        </Container>
    );
};

export default ModalAdd;
