import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as lexiconHelpers from './ScripturePane/helpers/lexiconHelpers';
// constants
export const TcuiThemeProvider = MuiThemeProvider;
export const createTcuiTheme = createMuiTheme;
export { default as CheckInfoCard } from './CheckInfoCard';
export { default as TranslationHelps } from './TranslationHelps';
export { default as ScripturePane } from './ScripturePane';
export { default as CommentsDialog } from './CommentsDialog';
export { default as VerseEditor } from './VerseEditor';
export { default as VerseCheck } from './VerseCheck';
export { default as GroupMenu } from './GroupMenu';
export {
  default as GroupedMenu, generateMenuItem, generateMenuData,
} from './GroupedMenu';
export { default as FunnelIcon } from './icons/Funnel';
export { default as InvalidatedIcon } from './icons/Invalidated';
export { default as CheckIcon } from './icons/Check';
export { default as Bookmark } from './Bookmark';
export { default as WordLexiconDetails } from './WordLexiconDetails';
export { default as SpinningLogo } from './SpinningLogo';
export { default as FontSizeSlider } from './FontSizeSlider';
export { getAlignedText } from './VerseCheck/helpers/checkAreaHelpers';
export {
  getReferenceStr, getTitleWithId, getTitleStr, isLTR,
} from './ScripturePane/helpers/utils';
export { lexiconHelpers };
