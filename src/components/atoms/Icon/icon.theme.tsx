import React from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaArrowLeft,
  FaArrowUp,
  FaBell,
  FaCss3Alt,
  FaJava,
  FaInstagram,
  FaCalendarAlt,
  FaCaretRight as ArrowIcon,
  FaChevronDown,
  FaCogs,
  FaDiceD6,
  FaPencilAlt,
  FaExclamationCircle,
  FaExpand,
  FaExternalLinkAlt,
  FaFacebookF,
  FaLaptopCode,
  FaGithub,
  FaGripLines,
  FaHtml5,
  FaHome,
  FaInfo,
  FaLinkedin,
  FaMinus,
  FaPlus,
  FaRegCalendarCheck,
  FaRegCheckCircle,
  FaRegHeart,
  FaRegTimesCircle,
  FaSearch,
  FaSignal,
  FaSignOutAlt,
  FaStar,
  FaSync,
  FaThermometerEmpty,
  FaThLarge,
  FaThList,
  FaTimes,
  FaTrashAlt,
  FaTwitter,
  FaUndo,
  FaUser,
  FaUserCircle,
  FaUsers,
  FaEye,
  FaEyeSlash,
  FaSort,
  FaRegEnvelope,
  FaLock,
  FaReact,
  FaUpload,
  FaQuestion,
  FaInfoCircle,
  
} from 'react-icons/fa';
import { IconProps } from './icon.types';

export type IconName =
  | 'add'
  | 'arrow'
  | 'arrowAngleDoubleLeft'
  | 'arrowAngleDoubleRight'
  | 'arrowAngleDown'
  | 'arrowAngleLeft'
  | 'arrowAngleRight'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowLink'
  | 'arrowUp'
  | 'calendar'
  | 'laptopCode'
  | 'calendarChecked'
  | 'calendarIcon'
  | 'check'
  | 'chevron'
  | 'close'
  | 'closeIcon'
  | 'default'
  | 'edit'
  | 'error'
  | 'html'
  | 'exclamation'
  | 'expand'
  | 'externalLink'
  | 'facebook'
  | 'github'
  | 'graphics'
  | 'grid'
  | 'help'
  | 'css'
  | 'home'
  | 'info'
  | 'java'
  | 'linkedin'
  | 'list'
  | 'logoff'
  | 'logout'
  | 'menu'
  | 'minus'
  | 'notifications'
  | 'person'
  | 'search'
  | 'instagram'
  | 'settings'
  | 'star'
  | 'success'
  | 'sync'
  | 'temperature'
  | 'trash'
  | 'twitter'
  | 'undo'
  | 'user'
  | 'userCircle'
  | 'infoCircle'
  | 'users'
  | 'eyeVisible'
  | 'eyeHidden'
  | 'sort'
  | 'react'
  | 'mail'
  | 'lock'
  | 'question'
  | 'upload';

const MapIcon: Record<IconName, JSX.Element> = {
  add: <FaPlus />,
  arrow: <ArrowIcon />,
  arrowAngleDoubleLeft: <FaAngleDoubleLeft />,
  arrowAngleDoubleRight: <FaAngleDoubleRight />,
  arrowAngleDown: <FaAngleDown />,
  arrowAngleLeft: <FaAngleLeft />,
  arrowAngleRight: <FaAngleRight />,
  laptopCode: <FaLaptopCode />,
  arrowDown: <FaArrowDown />,
  arrowLeft: <FaArrowLeft />,
  arrowLink: <FaExternalLinkAlt />,
  arrowUp: <FaArrowUp />,
  calendar: <FaCalendarAlt />,
  calendarChecked: <FaRegCalendarCheck />,
  calendarIcon: <FaCalendarAlt />,
  check: <FaRegCheckCircle />,
  chevron: <FaChevronDown />,
  close: <FaTimes />,
  react: <FaReact />,
  closeIcon: <FaTimes />,
  default: <FaDiceD6 />,
  edit: <FaPencilAlt />,
  error: <FaRegTimesCircle />,
  exclamation: <FaExclamationCircle />,
  expand: <FaExpand />,
  externalLink: <FaExternalLinkAlt />,
  facebook: <FaFacebookF />,
  github: <FaGithub />,
  css: <FaCss3Alt />,
  graphics: <FaSignal />,
  grid: <FaThLarge />,
  help: <FaRegHeart />,
  html: <FaHtml5 />,
  home: <FaHome />,
  info: <FaInfo />,
  java: <FaJava />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  list: <FaThList />,
  logoff: <FaSignOutAlt />,
  logout: <FaSignOutAlt />,
  menu: <FaGripLines />,
  minus: <FaMinus />,
  notifications: <FaBell />,
  person: <FaUser />,
  search: <FaSearch />,
  settings: <FaCogs />,
  star: <FaStar />,
  success: <FaRegCheckCircle />,
  sync: <FaSync />,
  temperature: <FaThermometerEmpty />,
  trash: <FaTrashAlt />,
  twitter: <FaTwitter />,
  undo: <FaUndo />,
  user: <FaUser />,
  userCircle: <FaUserCircle />,
  infoCircle: <FaInfoCircle />,
  users: <FaUsers />,
  eyeVisible: <FaEye />,
  eyeHidden: <FaEyeSlash />,
  sort: <FaSort />,
  mail: <FaRegEnvelope />,
  lock: <FaLock />,
  upload: <FaUpload />,
  question: <FaQuestion />,
};

const sizeIconMapper: Record<string, string> = {
  XS: '16px', 
  S: '100px',  
  M: '200px',   
  L: '250px',   
};

export const IconMapping = ({
  size = 'M',
}: IconProps): { [k: string]: JSX.Element } => {
  const style = {
    width: sizeIconMapper[size],
    height: sizeIconMapper[size],
  };

  return Object.fromEntries(
    Object.entries(MapIcon).map(([iconName, IconComponent]) => [
      iconName,
      React.cloneElement(IconComponent, { style }),
    ])
  );
};
