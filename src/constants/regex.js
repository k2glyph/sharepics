const Regex = {
    email: '/^[a-zA-Z0-9!#$&_*?^{}~-]+(.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9-]*).)+[a-zA-Z]+$/',
    // email: '/^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$/',
    // emailPattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    passwordPattern: '(?=^.{8,}$)((?=.*\\d)(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$',
    mobileNumberPattern: '[1-9][0-9]{0,10}',
    fullNameRegex: '^([a-zA-Z]+(_[a-zA-Z]+)*)(\\s([a-zA-Z]+(_[a-zA-Z]+)*))*$',
    spaceIgnoreRegex: '^(?!\\s*$).+',
    numberRegex: '^[0-9]+$',
    restrictZeroBeforeNumber: '^[1-9][0-9]*$',
    restrictSixDigitsOnly: '[0-9]{6}',
    restrictTenDigitsOnly: '[1-9][0-9]{0,10}',
};

export default Regex;
