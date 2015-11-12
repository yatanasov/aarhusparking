#!/usr/bin/env python
import sys
import os
import cherrypy
import json
import pymssql

class WebServer(object):

    
    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def getLocations(self):
        result = """{"help": "http://www.odaa.dk/api/3/action/help_show?name=datastore_search", "success": true, "result": {"resource_id": "2a82a145-0195-4081-a13c-b0e587e9b89c", "fields": [{"type": "int4", "id": "_id"}, {"type": "text", "id": "date"}, {"type": "text", "id": "garageCode"}, {"type": "int4", "id": "totalSpaces"}, {"type": "int4", "id": "vehicleCount"}], "records": [{"date": "2015/11/08 13:45:06", "vehicleCount": 53, "_id": 1, "totalSpaces": 65, "garageCode": "NORREPORT"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 512, "_id": 2, "totalSpaces": 512, "garageCode": "SKOLEBAKKEN"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 336, "_id": 3, "totalSpaces": 1240, "garageCode": "SCANDCENTER"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 525, "_id": 4, "totalSpaces": 953, "garageCode": "BRUUNS"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 2665, "_id": 5, "totalSpaces": 142, "garageCode": "BUSGADEHUSET"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 121, "_id": 6, "totalSpaces": 383, "garageCode": "MAGASIN"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 27, "_id": 7, "totalSpaces": 210, "garageCode": "KALKVAERKSVEJ"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 314, "_id": 8, "totalSpaces": 700, "garageCode": "SALLING"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 0, "_id": 9, "totalSpaces": 0, "garageCode": "DOKK1"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 59, "_id": 10, "totalSpaces": 449, "garageCode": "Navitas"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 105, "_id": 11, "totalSpaces": 105, "garageCode": "NewBusgadehuset"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 46, "_id": 12, "totalSpaces": 319, "garageCode": "Urban Level 1"}, {"date": "2015/11/08 13:45:06", "vehicleCount": 75, "_id": 13, "totalSpaces": 654, "garageCode": "Urban Level 2+3"}], "_links": {"start": "/api/action/datastore_search?resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c", "next": "/api/action/datastore_search?offset=100&resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c"}, "total": 13}}"""

	
        return result
    


def CORS():
    cherrypy.response.headers["Access-Control-Allow-Origin"] = "*"  

##################################### MAIN ###############################################

if __name__ == "__main__":
    cherrypy.engine.timeout_monitor.unsubscribe()
    cherrypy.response.headers["Access-Control-Allow-Origin"] = "localhost"
    cherrypy.config.update({'engine.autoreload.on': True})
    cherrypy.config.update({'tools.CORS.on': True})
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.config.update({'server.socket_host': '0.0.0.0',})
    cherrypy.config.update({'server.socket_port': int(os.environ.get('PORT', '5000')),})
    cherrypy.quickstart(WebServer())
