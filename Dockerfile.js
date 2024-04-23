FROM node:20
RUN git clone https://github.com/D4X-UMARGOLD-MD /root/D4X-UMAR
RUN npm install
WORKDIR /root/D4X-UMAR
EXPOSE 3000
CMD ["npm","start" ]
