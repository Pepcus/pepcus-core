# Define some base colors.
BLACK="\033[0;30m"
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
BLUE="\033[0;34m"
PURPLE="\033[0;35m"
CYAN="\033[0;36m"
WHITE="\033[0;37m"
BOLD=$(tput bold);
RESET=$(tput sgr0);
#
# Start the build for `ravenjs` library.
#
# cjs - components
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'cjs'${RESET} for ${BLUE}src/components${RESET}"
cross-env NODE_ENV=production NODE_PATH=src babel src/components --out-dir components --copy-files
# esm - components
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'esm'${RESET} for ${BLUE}src/components${RESET}"
cross-env NODE_ENV=production NODE_PATH=src BABEL_ENV=esm babel src/components --out-dir esm/components --copy-files
#
# cjs - constants
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'cjs'${RESET} for ${BLUE}src/constants${RESET}"
cross-env NODE_ENV=production NODE_PATH=src babel src/constants --out-dir constants --copy-files
# esm - constants
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'esm'${RESET} for ${BLUE}src/constants${RESET}"
cross-env NODE_ENV=production NODE_PATH=src BABEL_ENV=esm babel src/constants --out-dir esm/constants --copy-files
#
# cjs - lib
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'cjs'${RESET} for ${BLUE}src/lib${RESET}"
cross-env NODE_ENV=production NODE_PATH=src babel src/lib --out-dir lib --copy-files
# esm - lib
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'esm'${RESET} for ${BLUE}src/lib${RESET}"
cross-env NODE_ENV=production NODE_PATH=src BABEL_ENV=esm babel src/lib --out-dir esm/lib --copy-files
#
# cjs - utils
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'cjs'${RESET} for ${BLUE}src/utils${RESET}"
cross-env NODE_ENV=production NODE_PATH=src babel src/utils --out-dir utils --copy-files
# esm - utils
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'esm'${RESET} for ${BLUE}src/utils${RESET}"
cross-env NODE_ENV=production NODE_PATH=src BABEL_ENV=esm babel src/utils --out-dir esm/utils --copy-files
#
# cjs - index.js
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'cjs'${RESET} for ${BLUE}index.js${RESET}"
cross-env NODE_ENV=production NODE_PATH=src babel src/index.js --out-file ./index.js
echo -e "${RED}ravenjs${RESET} - building ${GREEN}'esm'${RESET} for ${BLUE}index.js${RESET}"
cross-env NODE_ENV=production NODE_PATH=src BABEL_ENV=esm babel src/index.js --out-file esm/index.js
#
# delete test files
echo -e "${RED}ravenjs${RESET} - ${GREEN}deleting${BLUE} all test files${RESET}"
del 'components/**/*.spec.js' 'lib/**/*.spec.js' 'utils/**/*.spec.js' 'esm/**/*.spec.js'
#
# finished building the `ravenjs` library
echo -e "\n${GREEN}Finished${RESET} building the ${RED}ravenjs${RESET} library"
