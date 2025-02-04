import { Button, Container, Heading, Stack } from '@chakra-ui/react'
import { Link, useRouteError } from 'react-router-dom'
import { RejectData } from 'shared/types'
import { useTranslation } from '../../../../node_modules/react-i18next'

export const Fallback = () => {
    const { t } = useTranslation()
    const error = useRouteError()
    const knownError = error as RejectData

    return (
        <Container
            w={'100vw'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Stack
                as='section'
                bgColor={'white'}
                justifyContent={'center'}
                spacing={4}
                alignItems={'center'}
                h='400px'
                w='100%'
                borderRadius={'50px'}>
                <Heading as={'h1'}>
                    {knownError?.statusText} {knownError?.status}
                </Heading>
                <Heading as='h2'>{t('errorPage.title')}</Heading>
                <Heading as='h3' size={'md'}>
                    {t('errorPage.subtitle')}
                </Heading>
                <Heading as='h4' size={'sm'}>
                    {t('errorPage.text')}
                </Heading>
                <Button mt='20px' colorScheme='teal'>
                    <Link to='/'>{t('errorPage.link')}</Link>
                </Button>
            </Stack>
        </Container>
    )
}
