
//works well with ios need something similar for android

type AlertAction = 'accept' | 'dismiss' | 'cancel' | 'confirm' | 'yes' | 'no';

async function handleSpecificAlert(client: WebdriverIO.Browser, alertTextMatch: string, action: AlertAction ='accept'): Promise<void> {
    try {
        await client.waitUntil(
            async () => {
                const alertText = await client.getAlertText();
                return alertText.includes(alertTextMatch);
            },
            {
                timeout: 5000, // Adjust timeout as needed
                timeoutMsg: `Alert with text "${alertTextMatch}" not found`
            }
        );

        const alertText = await client.getAlertText();
        console.log(`Alert text: ${alertText}`);

        const actions = {
            'accept': async () => await client.acceptAlert(),
            'confirm': async () => await client.acceptAlert(),
            'yes': async () => await client.acceptAlert(),
            'dismiss': async () => await client.dismissAlert(),
            'cancel': async () => await client.dismissAlert(),
            'no': async () => await client.dismissAlert(),
        };

        if (actions[action]) {
            await actions[action]();
            console.log(`Alert ${action}ed successfully`);
        } else  {
            throw new Error(`Unsupported action: ${action}`);
        }
    } catch (error) {
        console.log(`No alert with text "${alertTextMatch}" found or alert handling failed: ${(error as Error ).message}`);
    }
}

export default handleSpecificAlert ;
