import Channel from 'model/Channel';
import { FC } from 'react';
import * as Yup from 'yup';
import {
    AvatarChange,
    ChannelName,
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
interface IProps {
    setIsOpenAdd: (value: boolean) => void;
    setChannels: (value: Channel[]) => void;
    channels: Channel[];
}

const ModalAdd: FC<IProps> = ({ setIsOpenAdd, setChannels, channels }) => {
    const handleSubmit = (values, { resetForm }) => {
        setChannels([
            ...channels,
            {
                id: channels.length + 1,
                name: values.channelName,
                topic: values.channelTopic,
                image: '/images/default-avatar.png',
                members: [],
                isPrivate: values.isPrivate,
                hasNotifications: false,
                isSelected: false
            }
        ]);

        resetForm();
    };

    const initialValues = {
        channelName: '',
        channelTopic: '',
        isPrivate: false
    };

    let validate = Yup.object().shape({
        channelName: Yup.string()
            .required('required field')
            .max(11, 'most 11 caracters'),
        channelTopic: Yup.string()
            .required('required field')
            .max(30, 'most 30 caracters'),
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
