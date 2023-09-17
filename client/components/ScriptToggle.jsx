import {
    Text,
    HorizontalStack,
    Box,
    AlphaCard,
    Button,
    Badge,
    VerticalStack,
    useBreakpoints,
} from '@shopify/polaris';
import {CircleInformationMajor} from '@shopify/polaris-icons';
import {useState, useCallback, useEffect} from 'react';
import { useAuthenticatedFetch } from "../hooks";

  
export function ScriptToggle() {
  const fetch = useAuthenticatedFetch();

  const [enabled, setEnabled] = useState(false);
  useEffect( () => {
    (async()=>{
        let response = await fetch('/apps/api/backend/hasScripts');
        response = await response.json();
        setEnabled(response.scriptInstalled);
    })()
   
   }, [])

  const [toggleDisabled, setToggleDisabled] = useState(false);

  const handleToggle = useCallback(async () => {
    setEnabled((enabled) => !enabled)
    if (!enabled) {
        console.log('ADDING SCRIPTS');
        setToggleDisabled(true);
        const response = await fetch('/apps/api/backend/addScript');
        setToggleDisabled(false);
        console.log(await response.json())
    } else {
        console.log('REMOVING SCRIPTS');
        
        setToggleDisabled(true);
        const response = await fetch('/apps/api/backend/remove');
        setToggleDisabled(false);

        console.log(await response.json())
    }
  }, [enabled]);

  const contentStatus = enabled ? 'Disable' : 'Enable';

  const toggleId = 'setting-toggle-uuid';
  const descriptionId = 'setting-toggle-description-uuid';

  const {mdDown} = useBreakpoints();

  const badgeStatus = enabled ? 'success' : undefined;

  const badgeContent = enabled ? 'Enabled' : 'Disabled';

  const title = 'Enable WriteBoost AI';
  const description =
    'Enable and Disable WriteBoost AI from here. It may take a minute for changes to take effect.';

  const settingStatusMarkup = (
    <Badge
      status={badgeStatus}
      statusAndProgressLabelOverride={`Setting is ${badgeContent}`}
    >
      {badgeContent}
    </Badge>
  );

  const helpLink = (
    <Button
      plain
      icon={CircleInformationMajor}
      accessibilityLabel="Learn more"
    />
  );

  const settingTitle = title ? (
    <HorizontalStack gap="2" wrap={false}>
      <HorizontalStack gap="2" align="start" blockAlign="baseline">
        <label htmlFor={toggleId}>
          <Text variant="headingMd" as="h6">
            {title}
          </Text>
        </label>
        <HorizontalStack gap="2" align="center" blockAlign="center">
          {settingStatusMarkup}
          {helpLink}
        </HorizontalStack>
      </HorizontalStack>
    </HorizontalStack>
  ) : null;

  const actionMarkup = (
    <Button
      role="switch"
      id={toggleId}
      ariaChecked={enabled ? 'true' : 'false'}
      onClick={handleToggle}
      size="slim"
      disabled={toggleDisabled}
    >
      {contentStatus}
    </Button>
  );

  const headerMarkup = (
    <Box width="100%">
      <HorizontalStack
        gap="12"
        align="space-between"
        blockAlign="start"
        wrap={false}
      >
        {settingTitle}
        {!mdDown ? (
          <Box minWidth="fit-content">
            <HorizontalStack align="end">{actionMarkup}</HorizontalStack>
          </Box>
        ) : null}
      </HorizontalStack>
    </Box>
  );

  const descriptionMarkup = (
    <VerticalStack gap="4">
      <Text id={descriptionId} variant="bodyMd" as="p" color="subdued">
        {description}
      </Text>
      {mdDown ? (
        <Box width="100%">
          <HorizontalStack align="start">{actionMarkup}</HorizontalStack>
        </Box>
      ) : null}
    </VerticalStack>
  );

  return (
    <AlphaCard>
      <VerticalStack gap={{xs: '4', sm: '5'}}>
        <Box width="100%">
          <VerticalStack gap={{xs: '2', sm: '4'}}>
            {headerMarkup}
            {descriptionMarkup}
          </VerticalStack>
        </Box>
      </VerticalStack>
    </AlphaCard>
  );
}