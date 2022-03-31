FROM gitpod/workspace-full-vnc

# Update system
RUN sudo apt-get update && \
  sudo apt-get upgrade -y

# Install graphviz
RUN sudo apt-get install graphviz zsh zip unzip -y

# Install ohmyzsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install bit cli
ENV PATH=$HOME/bin:$PATH
RUN export PATH=$HOME/bin:$PATH && \
  npm i -g @teambit/bvm && \
  bvm install

# Get the public URL from gitpod
RUN echo 'export WA_HOME_URL="$(/usr/bin/gp url 4200)"' >> ~/.bashrc && \
  echo 'export WA_HOME_URL="$(/usr/bin/gp url 4200)"' >> ~/.zshrc

# Install Cypress dependencies
# TODO noninteractive has no affect
# RUN DEBIAN_FRONTEND=noninteractive sudo apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
