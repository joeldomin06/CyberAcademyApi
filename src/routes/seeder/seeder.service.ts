import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentsType } from '../components_types/entities/components_type.entity';
import { DataSource, Repository } from 'typeorm';
import { components_types } from './data/component_types_data';
import { ArchivementsType } from '../archivements_type/entities/archivements_type.entity';
import { archivements_types } from './data/archivementsTypes';

@Injectable()
export class SeederService {
    constructor(
        @InjectRepository(ComponentsType)
        private readonly componentTypeRepository: Repository<ComponentsType>,
        @InjectRepository(ArchivementsType)
        private readonly archivemetTypeRepository: Repository<ArchivementsType>,
        private dataSource: DataSource
    ){}
    async onModuleInit(){
        const conn = this.dataSource
        await conn.dropDatabase()
        await conn.synchronize()
    }
    async seed(){
        console.log("guardando component types")
        await this.componentTypeRepository.save(components_types)
        console.log("guardando archivements types")
        await this.archivemetTypeRepository.save(archivements_types)
        /*
        for await (const component_type of components_types){
            const ct = new ComponentsType();
            ct.name = component_type.name;
            ct.category = component_type.category;
            ct.chibicoins = component_type.chibicoins;
            this.componentTypeRepository.save(ct);
        }
        for await (const archivements_type of archivements_types){
            const a = new ArchivementsType();
            a.name = archivements_type.name;
            a.description = archivements_type.description;
            this.archivemetTypeRepository.save(a);
        }*/
    }
}
