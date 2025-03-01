import { AnimateSharedLayout, motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const typing = (line: string, delay: number = 0): any[] =>
  Array.from(line).map((char, index) => (
    <motion.span
      key={[char, index].join('-')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.04 + delay,
        ease: 'linear',
        duration: 0.1,
      }}
    >
      {char}
    </motion.span>
  ));

export function NpxCreateNxWorkspaceAnimation({
  restartFunction,
}: {
  restartFunction: () => void;
}): JSX.Element {
  const npxCreateNxWorkspace = useAnimation();
  const wrapper = useAnimation();
  const firstLoading = useAnimation();
  const frameworkSelectionTitle = useAnimation();
  const frameworkSelectionAnswerSection = useAnimation();
  const frameworkSelectionAnswerSectionArrow = useAnimation();
  const frameworkSelectionAnswerSectionPreviousHighlight = useAnimation();
  const frameworkSelectionAnswerSectionNextHighlight = useAnimation();
  const frameworkSelectionAnswerValidation = useAnimation();
  const applicationName = useAnimation();
  const stylesheetSelectionTitle = useAnimation();
  const stylesheetSelectionAnswerSection = useAnimation();
  const stylesheetSelectionAnswerSectionArrow = useAnimation();
  const stylesheetSelectionAnswerSectionPreviousHighlight = useAnimation();
  const stylesheetSelectionAnswerSectionNextHighlight = useAnimation();
  const stylesheetSelectionAnswerValidation = useAnimation();
  const nxCloudSelectionTitle = useAnimation();
  const nxCloudSelectionAnswerSection = useAnimation();
  const nxCloudSelectionAnswerSectionArrow = useAnimation();
  const nxCloudSelectionAnswerSectionPreviousHighlight = useAnimation();
  const nxCloudSelectionAnswerSectionNextHighlight = useAnimation();
  const nxCloudSelectionAnswerValidation = useAnimation();
  const creatingNxWorkspace = useAnimation();
  const creatingNxWorkspace2 = useAnimation();
  const secondLoading = useAnimation();
  const workpaceReady = useAnimation();
  const restartButton = useAnimation();

  const sequence = async () => {
    await npxCreateNxWorkspace.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.12,
      },
    });
    await firstLoading.start({
      width: '100%',
      transition: { delay: 2.4, ease: 'easeOut', duration: 0.24 },
    });
    await frameworkSelectionSequence();
    await applicationName.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.2,
      },
    });
    await stylesheetSelectionSequence(1.8);
    await nxCloudSelectionSequence();
    await creatingNxWorkspace.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.2,
      },
    });
    await creatingNxWorkspace2.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.2,
      },
    });
    await secondLoading.start({
      width: '100%',
      transition: { ease: 'easeOut', duration: 0.24 },
    });
    workpaceReady.start({
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
    await wrapper.start({
      y: -32,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
    return await restartButton.start({
      y: 0,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
  };

  const frameworkSelectionSequence = async (delay: number = 0) => {
    await frameworkSelectionTitle.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        delay,
        duration: 0.2,
      },
    });
    await frameworkSelectionAnswerSection.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.12,
      },
    });
    await frameworkSelectionAnswerSectionArrow.start({
      y: 54,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
    await frameworkSelectionAnswerSectionPreviousHighlight.start({
      color: '#E5E7EB',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await frameworkSelectionAnswerSectionNextHighlight.start({
      color: '#34D399',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await frameworkSelectionAnswerSection.start({
      opacity: 0,
      transition: {
        delay: 2,
        ease: 'easeOut',
        duration: 0.12,
      },
      transitionEnd: {
        display: 'none',
      },
    });
    return frameworkSelectionAnswerValidation.start({
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
  };
  const stylesheetSelectionSequence = async (delay: number = 0) => {
    await stylesheetSelectionTitle.start({
      opacity: 1,
      transition: {
        delay,
        ease: 'easeOut',
        duration: 0.2,
      },
    });
    await stylesheetSelectionAnswerSection.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.12,
      },
    });
    await stylesheetSelectionAnswerSectionArrow.start({
      y: 72,
      transition: { ease: 'easeOut', duration: 0.42 },
    });
    await stylesheetSelectionAnswerSectionPreviousHighlight.start({
      color: '#E5E7EB',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await stylesheetSelectionAnswerSectionNextHighlight.start({
      color: '#34D399',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await stylesheetSelectionAnswerSection.start({
      opacity: 0,
      transition: {
        delay: 2,
        ease: 'easeOut',
        duration: 0.12,
      },
      transitionEnd: {
        display: 'none',
      },
    });
    return stylesheetSelectionAnswerValidation.start({
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
  };
  const nxCloudSelectionSequence = async (delay: number = 0) => {
    await nxCloudSelectionTitle.start({
      opacity: 1,
      transition: {
        delay,
        ease: 'easeOut',
        duration: 0.2,
      },
    });
    await nxCloudSelectionAnswerSection.start({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.12,
      },
    });
    await nxCloudSelectionAnswerSectionArrow.start({
      y: 0,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
    await nxCloudSelectionAnswerSectionPreviousHighlight.start({
      color: '#E5E7EB',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await nxCloudSelectionAnswerSectionNextHighlight.start({
      color: '#34D399',
      transition: { ease: 'easeOut', duration: 0.12 },
    });
    await nxCloudSelectionAnswerSection.start({
      opacity: 0,
      transition: {
        delay: 2,
        ease: 'easeOut',
        duration: 0.12,
      },
      transitionEnd: {
        display: 'none',
      },
    });
    return nxCloudSelectionAnswerValidation.start({
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.24 },
    });
  };

  sequence();

  return (
    <>
      <div
        key={'npx-create-nx-workspace-animation'}
        className="relative h-96 max-w-full overflow-hidden rounded-lg bg-gray-800
              pt-4 pb-6 pt-4 font-mono text-xs leading-normal text-gray-200 subpixel-antialiased shadow-lg"
      >
        <div className="top mb-2 flex px-5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="ml-2 h-3 w-3 rounded-full bg-yellow-300" />
          <div className="ml-2 h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="overflow-y-hidden px-5">
          <motion.div initial={{ y: 0 }} animate={wrapper}>
            <div className="mt-4 flex">
              <span className="text-green-nx-base mr-2">/workspace ➜</span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={npxCreateNxWorkspace}
                className="typing flex-1 items-center"
              >
                {typing('npx create-nx-workspace ludicrous-narwhals').map(
                  (x) => x
                )}
              </motion.p>
            </div>
            <div className="mt-2 flex flex-col">
              <AnimateSharedLayout>
                {/*LOADING*/}
                <motion.div
                  className="bg-green-nx-base inline-block items-center"
                  initial={{ width: '0%', height: '12px' }}
                  animate={firstLoading}
                />
                {/*FRAMEWORK SELECTION*/}
                <motion.div
                  className="mt-2 flex-1 items-center"
                  initial={{ opacity: 0 }}
                  animate={frameworkSelectionTitle}
                >
                  What to create in the new workspace{' '}
                  <motion.span
                    className="text-green-nx-base"
                    initial={{ opacity: 0 }}
                    animate={frameworkSelectionAnswerValidation}
                  >
                    react [a workspace with a single React application]
                  </motion.span>
                </motion.div>
                <motion.div
                  className="relative mt-2"
                  initial={{ opacity: 0 }}
                  animate={frameworkSelectionAnswerSection}
                >
                  {/*SELECTION ARROW*/}
                  <motion.div
                    className="text-green-nx-base absolute -left-4 top-0"
                    initial={{ y: 0 }}
                    animate={frameworkSelectionAnswerSectionArrow}
                  >
                    ❯
                  </motion.div>
                  <motion.span
                    initial={{ color: '#34D399' }}
                    animate={frameworkSelectionAnswerSectionPreviousHighlight}
                  >
                    apps{' '}
                    <span className="text-[9px]">
                      [an empty workspace with no plugins with a layout that
                      works best for building apps]
                    </span>
                  </motion.span>
                  <br />
                  core{' '}
                  <span className="text-[9px]">
                    [an empty workspace with no plugins set up to publish npm
                    packages (similar to yarn workspaces)]
                  </span>
                  <br />
                  ts{' '}
                  <span className="text-[9px]">
                    [an empty workspace with the JS/TS plugin preinstalled]
                  </span>
                  <br />
                  <motion.span
                    initial={{ color: '#E5E7EB' }}
                    animate={frameworkSelectionAnswerSectionNextHighlight}
                  >
                    react{' '}
                    <span className="text-[9px]">
                      [a workspace with a single React application]
                    </span>
                  </motion.span>
                  <br />
                  angular{' '}
                  <span className="text-[9px]">
                    [a workspace with a single Angular application]
                  </span>
                  <br />
                  next.js{' '}
                  <span className="text-[9px]">
                    [a workspace with a single Next.js application]
                  </span>
                  <br />
                  gatsby{' '}
                  <span className="text-[9px]">
                    [a workspace with a single Gatsby application]
                  </span>
                  <br />
                  nest{' '}
                  <span className="text-[9px]">
                    [a workspace with a single Nest application]
                  </span>
                  <br />
                  express{' '}
                  <span className="text-[9px]">
                    [a workspace with a single Express application]
                  </span>
                  <br />
                  web components{' '}
                  <span className="text-[9px]">
                    [a workspace with a single app built using web components]
                  </span>
                  <br />
                  react-native{' '}
                  <span className="text-[9px]">
                    [a workspace with a single React Native application]
                  </span>
                  <br />
                  react-express{' '}
                  <span className="text-[9px]">
                    [a workspace with a full stack application (React +
                    Express)]
                  </span>
                  <br />
                  angular-nest{' '}
                  <span className="text-[9px]">
                    [a workspace with a full stack application (Angular + Nest)]
                  </span>
                  <br />
                  <span className="text-gray-500">(Use arrow keys)</span>
                </motion.div>
                {/*APPLICATION NAME*/}
                <motion.div
                  className="flex-1 items-center"
                  initial={{ opacity: 0 }}
                  animate={applicationName}
                >
                  Application name{' '}
                  <span className="text-green-nx-base">
                    {typing('tuxboard', 7).map((x) => x)}
                  </span>
                </motion.div>
                {/*STYLESHEET FORMAT*/}
                <motion.div
                  className="flex-1 items-center"
                  initial={{ opacity: 0 }}
                  animate={stylesheetSelectionTitle}
                >
                  Default stylesheet format{' '}
                  <motion.span
                    className="text-green-nx-base"
                    initial={{ opacity: 0 }}
                    animate={stylesheetSelectionAnswerValidation}
                  >
                    styled-components [
                    <a
                      href="https://styled-components.com"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                    >
                      https://styled-components.com
                    </a>
                    ]
                  </motion.span>
                </motion.div>
                <motion.div
                  className="relative mt-2"
                  initial={{ opacity: 0 }}
                  animate={stylesheetSelectionAnswerSection}
                >
                  {/*SELECTION ARROW*/}
                  <motion.div
                    className="text-green-nx-base absolute -left-4 top-0"
                    initial={{ y: 0 }}
                    animate={stylesheetSelectionAnswerSectionArrow}
                  >
                    ❯
                  </motion.div>
                  <motion.span
                    initial={{ color: '#34D399' }}
                    animate={stylesheetSelectionAnswerSectionPreviousHighlight}
                  >
                    CSS
                  </motion.span>
                  <br />
                  SASS(.scss) [
                  <a
                    href="https://sass-lang.com"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                  >
                    https://sass-lang.com
                  </a>
                  ] <br />
                  Stylus(.styl)[
                  <a
                    href="https://stylus-lang.com"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                  >
                    https://stylus-lang.com
                  </a>
                  ] <br />
                  LESS [
                  <a
                    href="https://lesscss.org"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                  >
                    https://lesscss.org
                  </a>
                  ] <br />
                  <motion.span
                    initial={{ color: '#E5E7EB' }}
                    animate={stylesheetSelectionAnswerSectionNextHighlight}
                  >
                    styled-components [
                    <a
                      href="https://styled-components.com"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                    >
                      https://styled-components.com
                    </a>
                    ]
                  </motion.span>
                  <br />
                  emotion [
                  <a
                    href="https://emotion.sh"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                  >
                    https://emotion.sh
                  </a>
                  ] <br />
                  styled-jsx [
                  <a
                    href="https://www.npmjs.com/package/styled-jsx"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                  >
                    https://www.npmjs.com/package/styled-jsx
                  </a>
                  ] <br />
                  <span className="text-gray-500">(Use arrow keys)</span>
                </motion.div>
                {/*NX CLOUD*/}
                <motion.div
                  layout
                  className="flex-1 items-center"
                  initial={{ opacity: 0 }}
                  animate={nxCloudSelectionTitle}
                >
                  Set up distributed caching using Nx Cloud (It's free and
                  doesn't require registration.){' '}
                  <motion.span
                    className="text-green-nx-base"
                    initial={{ opacity: 0 }}
                    animate={nxCloudSelectionAnswerValidation}
                  >
                    Yes
                  </motion.span>
                </motion.div>
                <motion.div
                  className="relative mt-2"
                  initial={{ opacity: 0 }}
                  animate={nxCloudSelectionAnswerSection}
                >
                  {/*SELECTION ARROW*/}
                  <motion.div
                    className="text-green-nx-base absolute -left-4 top-0"
                    initial={{ y: 18 }}
                    animate={nxCloudSelectionAnswerSectionArrow}
                  >
                    ❯
                  </motion.div>
                  <motion.span
                    initial={{ color: '#E5E7EB' }}
                    animate={nxCloudSelectionAnswerSectionNextHighlight}
                  >
                    Yes
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ color: '#34D399' }}
                    animate={nxCloudSelectionAnswerSectionPreviousHighlight}
                  >
                    No
                  </motion.span>
                  <br />
                  <span className="text-gray-500">(Use arrow keys)</span>
                </motion.div>
                {/*CREATING NX WORKSPACE*/}
                <motion.div
                  layout
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={creatingNxWorkspace}
                >
                  <span className="bg-green-nx-base px-1 py-0.5">NX</span> Nx is
                  creating your workspace. To make sure the command works
                  reliably in all environments, and that the preset is applied
                  correctly, Nx will run "yarn install" several times. Please
                  wait.
                </motion.div>
                <motion.div
                  layout
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={creatingNxWorkspace2}
                >
                  Creating your workspace
                </motion.div>
                {/*LOADING*/}
                <motion.div
                  layout
                  className="bg-green-nx-base mt-2 items-center"
                  initial={{ width: '0%', height: '12px' }}
                  animate={secondLoading}
                />
                {/*NX WORKSPACE CREATED*/}
                <motion.div
                  layout
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={workpaceReady}
                >
                  <div>
                    <span className="bg-green-nx-base px-1 py-0.5">
                      NX SUCCESS
                    </span>{' '}
                    Nx has successfully created the workspace.
                  </div>
                  <div className="my-3 h-px w-full bg-gray-100" />
                  <div>
                    <span className="bg-green-nx-base px-1 py-0.5">NX</span>
                    <span className="ml-1 bg-yellow-500 px-1 py-0.5">
                      NOTE
                    </span>{' '}
                    First time using Nx? Check out this interactive Nx tutorial.
                    <br />
                    <a
                      href="https://nx.dev/react-tutorial/1-code-generation"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                    >
                      https://nx.dev/react-tutorial/1-code-generation
                    </a>
                    <br />
                    Prefer watching videos? Check out this free Nx course on
                    Egghead.io.
                    <br />
                    <a
                      href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                    >
                      https://egghead.io/playlists/scale-react-development-with-nx-4038
                    </a>
                  </div>
                </motion.div>
              </AnimateSharedLayout>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-2 right-4"
          initial={{ y: -100 }}
          animate={restartButton}
        >
          <button
            type="button"
            onClick={() => restartFunction() && sequence()}
            className="text-green-nx-base w-full flex-none rounded-md border border-gray-700 bg-gray-800 py-1 px-3 text-xs font-normal transition hover:bg-gray-700 sm:w-auto"
          >
            <svg
              className="r-2 inline-flex h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{' '}
            Play again
          </button>
        </motion.div>
      </div>
    </>
  );
}

export function NpxCreateNxWorkspace(): JSX.Element {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const restart = () => {
    setIsDisplayed(false);
    setTimeout(() => {
      setIsDisplayed(true);
    });
  };

  return (
    <>
      {isDisplayed ? (
        <NpxCreateNxWorkspaceAnimation restartFunction={restart} />
      ) : (
        <div
          key={'npx-create-nx-workspace-animation'}
          className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-800
              pt-4 pb-6 pt-4 font-mono text-xs leading-normal text-gray-200 subpixel-antialiased shadow-lg"
        >
          <div className="top mb-2 flex px-5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="ml-2 h-3 w-3 rounded-full bg-yellow-300" />
            <div className="ml-2 h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="overflow-y-hidden px-5" />
        </div>
      )}
    </>
  );
}
